export interface UseCase<TInput = any, TResult = any> {
  execute(input: TInput): Promise<TResult>
}
