import { FormikState } from "formik"

export type CartProviderProps = {
  children: React.ReactNode
}

export type LoginFormType = {
  email: string
  password: string
}

export type FormikActions = {
  resetForm: (
    nextState?: Partial<FormikState<LoginFormType>> | undefined
  ) => void
}
