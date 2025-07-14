
import { userCReateFunction, userGetFunction } from "@/functions/users.get";
import { FormEvent, useRef, useState } from "react";

export default function Form() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const userdata = {
            name: nameRef.current?.value ?? "",
            email: emailRef.current?.value ?? "",
            password: passwordRef.current?.value ?? "",
        };

        if (userdata.name && userdata.email && userdata.password) {
            userCReateFunction(userdata);
            userGetFunction();
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="p-[10px] flex flex-col gap-3 bg-white w-[600px]">
            <input ref={nameRef} className="border-1 rounded-xl border-black p-[10px] placeholder:text-black text-black" type="text" placeholder="name" required />
            <input ref={emailRef} className="border-1 rounded-xl border-black p-[10px] placeholder:text-black text-black" type="email" placeholder="email" required />
            <input ref={passwordRef} className="border-1 rounded-xl border-black p-[10px] placeholder:text-black text-black" type="password" placeholder="password" required />
            <button className="p-[10px] bg-green-400" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </button>
            {error && <span className="text-red-500">{error}</span>}
        </form>
    );
}