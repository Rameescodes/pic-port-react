  <div className="flex w-full min-h-5">
            <div className="w-full flex items-center justify-center lg:max-w-screen-2xl">
                <div>
                    <div className="flex min-h-full flex-col justify-center px-6 p-12 lg:px-4">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                           <h1 className=" text-4xl font-semibold mb-2">Welcome Back</h1>
            <h1 className="text-lg font-normal mb-4">Login to your account</h1>
                          
                        </div>
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="btn-wrapper text-center">
                                <button
                                    className="bg-white active:bg-blueGray-50 text-blueGray-700 px-10 py-3 rounded-md outline-grey focus:outline-none uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handlegoogleSignUp}
                                >
                                    <img
                                        alt="..."
                                        className="w-5 mr-1"
                                        src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                                    />
                                    Google
                                </button>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="mt-6 mx-auto w-full max-w-lg">

                               <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            <Form className="space-y-4">
              <div className="mb-4">
                <Field
                  type="text"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className=" w-full border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component={TextError} />
              </div>  
              {/* Password Input */}
              <div className="mb-4">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="w-full border border-gray-300 rounded-xl py-4 px-4 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
                <ErrorMessage name="password" component={TextError} />
              </div>
              {/* Forgot Password Link */}
              <div className="mb-6 text-sm text-red-500">
                <Link to="/forgot-password" className="hover:underline">
                  Forgot Password?
                </Link>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="bg-violet-800 hover:bg-violet-950 text-white font-semibold rounded-md py-3 px-4 w-full"
              >
                Login
              </button>
            </Form>
          </Formik>{" "}

                                <p className="mt-10 text-center text-sm ">
                                   Don't have an account?
                                    <Link to='/signup' className="font-semibold leading- text-violet-800 hover:text-indigo-500">Sign up!</Link>
                                </p>
                     
                        </div>
                    </div>
                </div>
            </div>
         
        </div>  