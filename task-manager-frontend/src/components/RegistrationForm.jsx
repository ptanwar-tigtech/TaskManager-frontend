import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/registrationSchema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

function RegistrationForm() {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            date: null,
        },
        resolver: yupResolver(registrationSchema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="form-page">
            <div className="form-card">
                <div className="form-header">
                    <h1>Registration Form</h1>
                    <p>Create your account</p>
                </div>

                <form
                    className="registration-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name")}
                        />

                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                        />

                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Select Date</label>

                        <Controller
                            name="date"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    id="date"
                                    placeholderText="Select a date"
                                    selected={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                {...register("password")}
                            />

                            {errors.password && <p>{errors.password.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Age</label>

                            <input
                                id="age"
                                type="number"
                                placeholder="Enter age"
                                {...register("age")}
                            />

                            {errors.age && <p>{errors.age.message}</p>}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-button">
                            Register
                        </button>

                        <button
                            type="button"
                            className="reset-button"
                            onClick={() => reset()}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;