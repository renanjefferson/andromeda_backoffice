import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/ui/Button';
import * as Input from '@/components/ui/Input';

type LoginInputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Digite um e-mail válido'),
  password: yup.string().required('Senha é obrigatória').min(6),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log({ data });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-7 text-center text-[28px] font-bold md:text-3xl lg:mb-10 lg:text-4xl">
        Entre com suas credenciais.
      </h1>
      <div className="lg:space-y6 flex flex-col space-y-5">
        <div>
          <Input.Label labelText="E-mail" htmlFor="email">
            <Input.Root>
              <Input.Control
                type="email"
                id="email"
                placeholder="john@example.com"
                {...register('email')}
              />
            </Input.Root>
          </Input.Label>
          {!!errors && (
            <Input.HelperText error={errors.email}>
              {errors.email?.message}
            </Input.HelperText>
          )}
        </div>

        <div>
          <Input.Label labelText="Password" htmlFor="password">
            <Input.Root>
              <Input.Control
                type="password"
                id="password"
                placeholder="············"
                {...register('password')}
              />
            </Input.Root>
          </Input.Label>
          {!!errors && (
            <Input.HelperText error={errors.password}>
              {errors.password?.message}
            </Input.HelperText>
          )}
        </div>

        <div>
          <Button type="submit" variant="primary">
            <span>Entrar</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
