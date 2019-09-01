export const loggerMiddleware = store => {
  return next => {
    return action => {
      console.log('Logger - Redux Middleware ', action)
      return next(action)
    }
  }
}