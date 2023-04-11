import { useForm } from "react-hook-form";
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password1: string;
  password2: string;
  extraError?: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "Server offline." });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column", gap: "10" }}
      >
        <input
          {...register("email", {
            required: "required email",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowd",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "First Name required." })}
          placeholder="first name"
        />
        <span>{errors?.firstName?.message}</span>
        <input {...register("lastName")} placeholder="last name" />
        <span>{errors?.lastName?.message}</span>
        <input {...register("username")} placeholder="user name" />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password1", {
            required: "input password1",
            minLength: {
              value: 10,
              message: "at least 10 characters",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", {
            required: "input password2",
            minLength: {
              value: 10,
              message: "at least 10 characters",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
