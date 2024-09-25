import { LuImage } from 'react-icons/lu';
import { Button } from '@/components/ui/Button';
import * as Input from '@/components/ui/Input';

export function Login() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md px-4 md:max-w-lg lg:max-w-xl">
        <div className="mb-7 flex justify-center lg:mb-10">
          <LuImage size={62} />
        </div>
        <form>
          <h1 className="mb-7 text-center text-[28px] font-bold md:text-3xl lg:mb-10 lg:text-4xl">
            Entre com suas credenciais.
          </h1>
          <div className="lg:space-y6 flex flex-col space-y-5">
            <Input.Label labelText="E-mail" htmlFor="email">
              <Input.Root>
                <Input.Control
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                />
              </Input.Root>
            </Input.Label>

            <Input.Label labelText="Password" htmlFor="password">
              <Input.Root>
                <Input.Control
                  type="password"
                  id="password"
                  placeholder="············"
                />
              </Input.Root>
            </Input.Label>

            <div>
              <Button type="button" variant="primary">
                <span>Entrar</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
