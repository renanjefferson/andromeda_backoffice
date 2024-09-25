import { LuImage } from 'react-icons/lu';
import { LoginForm } from './loginForm';

export function Login() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md px-4 md:max-w-lg lg:max-w-xl">
        <div className="mb-7 flex justify-center lg:mb-10">
          <LuImage size={62} />
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
