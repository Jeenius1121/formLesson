import styles from "./App.module.scss";
import {useForm} from "react-hook-form";
function App() {

  const {register, handleSubmit, getValues, watch, formState: {errors}} = useForm({
    // defaultValues: {
    //   name: "Roumain",
    // }
  });

  console.log(errors);

  // watch('name');
  function submit(values) {
    console.log(values);
  }
  // console.log(getValues());
    function submit(values) {
      console.log(values);
    }
    
    // const name = register("name");
    // console.log(name);
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <form onSubmit={handleSubmit(submit)} >
        <div className="d-flex flex-column align-items-center mb20">
          <label className="mb5" htmlFor="name">Name</label>
          <input type="text" name="name" id="name" {...register("name", { minLength: { value:3, message: "Au moins 3 caractères"}, required: {
            value: true,
            message: "Ce champ doit être rempli",

          }, })} />
          { errors?.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column align-items-center mb20">
          <label className="mb5" htmlFor="password">Password</label>
          <input type="password" name="password" id="password" {...register("password", {required: {
            value: true,
            message: "Ce champ doit être rempli",
          }})} />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default App;
