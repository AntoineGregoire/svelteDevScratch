
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShiftEntries
 * 
 */
export type ShiftEntries = $Result.DefaultSelection<Prisma.$ShiftEntriesPayload>
/**
 * Model Chalet
 * 
 */
export type Chalet = $Result.DefaultSelection<Prisma.$ChaletPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model savedMessages
 * 
 */
export type savedMessages = $Result.DefaultSelection<Prisma.$savedMessagesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.shiftEntries`: Exposes CRUD operations for the **ShiftEntries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftEntries
    * const shiftEntries = await prisma.shiftEntries.findMany()
    * ```
    */
  get shiftEntries(): Prisma.ShiftEntriesDelegate<ExtArgs>;

  /**
   * `prisma.chalet`: Exposes CRUD operations for the **Chalet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chalets
    * const chalets = await prisma.chalet.findMany()
    * ```
    */
  get chalet(): Prisma.ChaletDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.savedMessages`: Exposes CRUD operations for the **savedMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedMessages
    * const savedMessages = await prisma.savedMessages.findMany()
    * ```
    */
  get savedMessages(): Prisma.savedMessagesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ShiftEntries: 'ShiftEntries',
    Chalet: 'Chalet',
    Task: 'Task',
    savedMessages: 'savedMessages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'shiftEntries' | 'chalet' | 'task' | 'savedMessages'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShiftEntries: {
        payload: Prisma.$ShiftEntriesPayload<ExtArgs>
        fields: Prisma.ShiftEntriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftEntriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftEntriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>
          }
          findFirst: {
            args: Prisma.ShiftEntriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftEntriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>
          }
          findMany: {
            args: Prisma.ShiftEntriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>[]
          }
          create: {
            args: Prisma.ShiftEntriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>
          }
          createMany: {
            args: Prisma.ShiftEntriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShiftEntriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>
          }
          update: {
            args: Prisma.ShiftEntriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>
          }
          deleteMany: {
            args: Prisma.ShiftEntriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftEntriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShiftEntriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftEntriesPayload>
          }
          aggregate: {
            args: Prisma.ShiftEntriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShiftEntries>
          }
          groupBy: {
            args: Prisma.ShiftEntriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShiftEntriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftEntriesCountArgs<ExtArgs>,
            result: $Utils.Optional<ShiftEntriesCountAggregateOutputType> | number
          }
        }
      }
      Chalet: {
        payload: Prisma.$ChaletPayload<ExtArgs>
        fields: Prisma.ChaletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChaletFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChaletFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>
          }
          findFirst: {
            args: Prisma.ChaletFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChaletFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>
          }
          findMany: {
            args: Prisma.ChaletFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>[]
          }
          create: {
            args: Prisma.ChaletCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>
          }
          createMany: {
            args: Prisma.ChaletCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChaletDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>
          }
          update: {
            args: Prisma.ChaletUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>
          }
          deleteMany: {
            args: Prisma.ChaletDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChaletUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChaletUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChaletPayload>
          }
          aggregate: {
            args: Prisma.ChaletAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChalet>
          }
          groupBy: {
            args: Prisma.ChaletGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChaletGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChaletCountArgs<ExtArgs>,
            result: $Utils.Optional<ChaletCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      savedMessages: {
        payload: Prisma.$savedMessagesPayload<ExtArgs>
        fields: Prisma.savedMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.savedMessagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.savedMessagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>
          }
          findFirst: {
            args: Prisma.savedMessagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.savedMessagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>
          }
          findMany: {
            args: Prisma.savedMessagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>[]
          }
          create: {
            args: Prisma.savedMessagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>
          }
          createMany: {
            args: Prisma.savedMessagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.savedMessagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>
          }
          update: {
            args: Prisma.savedMessagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>
          }
          deleteMany: {
            args: Prisma.savedMessagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.savedMessagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.savedMessagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$savedMessagesPayload>
          }
          aggregate: {
            args: Prisma.SavedMessagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSavedMessages>
          }
          groupBy: {
            args: Prisma.savedMessagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SavedMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.savedMessagesCountArgs<ExtArgs>,
            result: $Utils.Optional<SavedMessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    shifts: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    shifts?: boolean | UserCountOutputTypeCountShiftsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftEntriesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savedMessagesWhereInput
  }



  /**
   * Count Type ChaletCountOutputType
   */

  export type ChaletCountOutputType = {
    tasks: number
  }

  export type ChaletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ChaletCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes

  /**
   * ChaletCountOutputType without action
   */
  export type ChaletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaletCountOutputType
     */
    select?: ChaletCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChaletCountOutputType without action
   */
  export type ChaletCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    avatar: string | null
    loggedIn: boolean | null
    password: string | null
    usrAuthTokn: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    avatar: string | null
    loggedIn: boolean | null
    password: string | null
    usrAuthTokn: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    loggedIn: number
    password: number
    usrAuthTokn: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    loggedIn?: true
    password?: true
    usrAuthTokn?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    loggedIn?: true
    password?: true
    usrAuthTokn?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    loggedIn?: true
    password?: true
    usrAuthTokn?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    avatar: string | null
    loggedIn: boolean
    password: string
    usrAuthTokn: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    loggedIn?: boolean
    password?: boolean
    usrAuthTokn?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    shifts?: boolean | User$shiftsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    loggedIn?: boolean
    password?: boolean
    usrAuthTokn?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    shifts?: boolean | User$shiftsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      shifts: Prisma.$ShiftEntriesPayload<ExtArgs>[]
      messages: Prisma.$savedMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      avatar: string | null
      loggedIn: boolean
      password: string
      usrAuthTokn: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    shifts<T extends User$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, User$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly loggedIn: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly usrAuthTokn: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * User.shifts
   */
  export type User$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    where?: ShiftEntriesWhereInput
    orderBy?: ShiftEntriesOrderByWithRelationInput | ShiftEntriesOrderByWithRelationInput[]
    cursor?: ShiftEntriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftEntriesScalarFieldEnum | ShiftEntriesScalarFieldEnum[]
  }


  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    where?: savedMessagesWhereInput
    orderBy?: savedMessagesOrderByWithRelationInput | savedMessagesOrderByWithRelationInput[]
    cursor?: savedMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedMessagesScalarFieldEnum | SavedMessagesScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ShiftEntries
   */

  export type AggregateShiftEntries = {
    _count: ShiftEntriesCountAggregateOutputType | null
    _avg: ShiftEntriesAvgAggregateOutputType | null
    _sum: ShiftEntriesSumAggregateOutputType | null
    _min: ShiftEntriesMinAggregateOutputType | null
    _max: ShiftEntriesMaxAggregateOutputType | null
  }

  export type ShiftEntriesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShiftEntriesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShiftEntriesMinAggregateOutputType = {
    id: number | null
    userName: string | null
    userId: number | null
    shiftStart: string | null
    shiftEnd: string | null
    hoursWorkd: string | null
  }

  export type ShiftEntriesMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    userId: number | null
    shiftStart: string | null
    shiftEnd: string | null
    hoursWorkd: string | null
  }

  export type ShiftEntriesCountAggregateOutputType = {
    id: number
    userName: number
    userId: number
    shiftStart: number
    shiftEnd: number
    hoursWorkd: number
    _all: number
  }


  export type ShiftEntriesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShiftEntriesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShiftEntriesMinAggregateInputType = {
    id?: true
    userName?: true
    userId?: true
    shiftStart?: true
    shiftEnd?: true
    hoursWorkd?: true
  }

  export type ShiftEntriesMaxAggregateInputType = {
    id?: true
    userName?: true
    userId?: true
    shiftStart?: true
    shiftEnd?: true
    hoursWorkd?: true
  }

  export type ShiftEntriesCountAggregateInputType = {
    id?: true
    userName?: true
    userId?: true
    shiftStart?: true
    shiftEnd?: true
    hoursWorkd?: true
    _all?: true
  }

  export type ShiftEntriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftEntries to aggregate.
     */
    where?: ShiftEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftEntries to fetch.
     */
    orderBy?: ShiftEntriesOrderByWithRelationInput | ShiftEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftEntries
    **/
    _count?: true | ShiftEntriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftEntriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftEntriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftEntriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftEntriesMaxAggregateInputType
  }

  export type GetShiftEntriesAggregateType<T extends ShiftEntriesAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftEntries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftEntries[P]>
      : GetScalarType<T[P], AggregateShiftEntries[P]>
  }




  export type ShiftEntriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftEntriesWhereInput
    orderBy?: ShiftEntriesOrderByWithAggregationInput | ShiftEntriesOrderByWithAggregationInput[]
    by: ShiftEntriesScalarFieldEnum[] | ShiftEntriesScalarFieldEnum
    having?: ShiftEntriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftEntriesCountAggregateInputType | true
    _avg?: ShiftEntriesAvgAggregateInputType
    _sum?: ShiftEntriesSumAggregateInputType
    _min?: ShiftEntriesMinAggregateInputType
    _max?: ShiftEntriesMaxAggregateInputType
  }

  export type ShiftEntriesGroupByOutputType = {
    id: number
    userName: string
    userId: number
    shiftStart: string
    shiftEnd: string | null
    hoursWorkd: string | null
    _count: ShiftEntriesCountAggregateOutputType | null
    _avg: ShiftEntriesAvgAggregateOutputType | null
    _sum: ShiftEntriesSumAggregateOutputType | null
    _min: ShiftEntriesMinAggregateOutputType | null
    _max: ShiftEntriesMaxAggregateOutputType | null
  }

  type GetShiftEntriesGroupByPayload<T extends ShiftEntriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftEntriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftEntriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftEntriesGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftEntriesGroupByOutputType[P]>
        }
      >
    >


  export type ShiftEntriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userId?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    hoursWorkd?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftEntries"]>

  export type ShiftEntriesSelectScalar = {
    id?: boolean
    userName?: boolean
    userId?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    hoursWorkd?: boolean
  }

  export type ShiftEntriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ShiftEntriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftEntries"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userName: string
      userId: number
      shiftStart: string
      shiftEnd: string | null
      hoursWorkd: string | null
    }, ExtArgs["result"]["shiftEntries"]>
    composites: {}
  }


  type ShiftEntriesGetPayload<S extends boolean | null | undefined | ShiftEntriesDefaultArgs> = $Result.GetResult<Prisma.$ShiftEntriesPayload, S>

  type ShiftEntriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftEntriesFindManyArgs, 'select' | 'include'> & {
      select?: ShiftEntriesCountAggregateInputType | true
    }

  export interface ShiftEntriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftEntries'], meta: { name: 'ShiftEntries' } }
    /**
     * Find zero or one ShiftEntries that matches the filter.
     * @param {ShiftEntriesFindUniqueArgs} args - Arguments to find a ShiftEntries
     * @example
     * // Get one ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShiftEntriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftEntriesFindUniqueArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShiftEntries that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShiftEntriesFindUniqueOrThrowArgs} args - Arguments to find a ShiftEntries
     * @example
     * // Get one ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShiftEntriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftEntriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShiftEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesFindFirstArgs} args - Arguments to find a ShiftEntries
     * @example
     * // Get one ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShiftEntriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftEntriesFindFirstArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShiftEntries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesFindFirstOrThrowArgs} args - Arguments to find a ShiftEntries
     * @example
     * // Get one ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShiftEntriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftEntriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShiftEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.findMany()
     * 
     * // Get first 10 ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftEntriesWithIdOnly = await prisma.shiftEntries.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShiftEntriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftEntriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShiftEntries.
     * @param {ShiftEntriesCreateArgs} args - Arguments to create a ShiftEntries.
     * @example
     * // Create one ShiftEntries
     * const ShiftEntries = await prisma.shiftEntries.create({
     *   data: {
     *     // ... data to create a ShiftEntries
     *   }
     * })
     * 
    **/
    create<T extends ShiftEntriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftEntriesCreateArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShiftEntries.
     *     @param {ShiftEntriesCreateManyArgs} args - Arguments to create many ShiftEntries.
     *     @example
     *     // Create many ShiftEntries
     *     const shiftEntries = await prisma.shiftEntries.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShiftEntriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftEntriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShiftEntries.
     * @param {ShiftEntriesDeleteArgs} args - Arguments to delete one ShiftEntries.
     * @example
     * // Delete one ShiftEntries
     * const ShiftEntries = await prisma.shiftEntries.delete({
     *   where: {
     *     // ... filter to delete one ShiftEntries
     *   }
     * })
     * 
    **/
    delete<T extends ShiftEntriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftEntriesDeleteArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShiftEntries.
     * @param {ShiftEntriesUpdateArgs} args - Arguments to update one ShiftEntries.
     * @example
     * // Update one ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShiftEntriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftEntriesUpdateArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShiftEntries.
     * @param {ShiftEntriesDeleteManyArgs} args - Arguments to filter ShiftEntries to delete.
     * @example
     * // Delete a few ShiftEntries
     * const { count } = await prisma.shiftEntries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShiftEntriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftEntriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShiftEntriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftEntriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShiftEntries.
     * @param {ShiftEntriesUpsertArgs} args - Arguments to update or create a ShiftEntries.
     * @example
     * // Update or create a ShiftEntries
     * const shiftEntries = await prisma.shiftEntries.upsert({
     *   create: {
     *     // ... data to create a ShiftEntries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftEntries we want to update
     *   }
     * })
    **/
    upsert<T extends ShiftEntriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftEntriesUpsertArgs<ExtArgs>>
    ): Prisma__ShiftEntriesClient<$Result.GetResult<Prisma.$ShiftEntriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShiftEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesCountArgs} args - Arguments to filter ShiftEntries to count.
     * @example
     * // Count the number of ShiftEntries
     * const count = await prisma.shiftEntries.count({
     *   where: {
     *     // ... the filter for the ShiftEntries we want to count
     *   }
     * })
    **/
    count<T extends ShiftEntriesCountArgs>(
      args?: Subset<T, ShiftEntriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftEntriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftEntriesAggregateArgs>(args: Subset<T, ShiftEntriesAggregateArgs>): Prisma.PrismaPromise<GetShiftEntriesAggregateType<T>>

    /**
     * Group by ShiftEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftEntriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftEntriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftEntriesGroupByArgs['orderBy'] }
        : { orderBy?: ShiftEntriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftEntriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftEntriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftEntries model
   */
  readonly fields: ShiftEntriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftEntries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftEntriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShiftEntries model
   */ 
  interface ShiftEntriesFieldRefs {
    readonly id: FieldRef<"ShiftEntries", 'Int'>
    readonly userName: FieldRef<"ShiftEntries", 'String'>
    readonly userId: FieldRef<"ShiftEntries", 'Int'>
    readonly shiftStart: FieldRef<"ShiftEntries", 'String'>
    readonly shiftEnd: FieldRef<"ShiftEntries", 'String'>
    readonly hoursWorkd: FieldRef<"ShiftEntries", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ShiftEntries findUnique
   */
  export type ShiftEntriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * Filter, which ShiftEntries to fetch.
     */
    where: ShiftEntriesWhereUniqueInput
  }


  /**
   * ShiftEntries findUniqueOrThrow
   */
  export type ShiftEntriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * Filter, which ShiftEntries to fetch.
     */
    where: ShiftEntriesWhereUniqueInput
  }


  /**
   * ShiftEntries findFirst
   */
  export type ShiftEntriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * Filter, which ShiftEntries to fetch.
     */
    where?: ShiftEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftEntries to fetch.
     */
    orderBy?: ShiftEntriesOrderByWithRelationInput | ShiftEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftEntries.
     */
    cursor?: ShiftEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftEntries.
     */
    distinct?: ShiftEntriesScalarFieldEnum | ShiftEntriesScalarFieldEnum[]
  }


  /**
   * ShiftEntries findFirstOrThrow
   */
  export type ShiftEntriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * Filter, which ShiftEntries to fetch.
     */
    where?: ShiftEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftEntries to fetch.
     */
    orderBy?: ShiftEntriesOrderByWithRelationInput | ShiftEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftEntries.
     */
    cursor?: ShiftEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftEntries.
     */
    distinct?: ShiftEntriesScalarFieldEnum | ShiftEntriesScalarFieldEnum[]
  }


  /**
   * ShiftEntries findMany
   */
  export type ShiftEntriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * Filter, which ShiftEntries to fetch.
     */
    where?: ShiftEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftEntries to fetch.
     */
    orderBy?: ShiftEntriesOrderByWithRelationInput | ShiftEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftEntries.
     */
    cursor?: ShiftEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftEntries.
     */
    skip?: number
    distinct?: ShiftEntriesScalarFieldEnum | ShiftEntriesScalarFieldEnum[]
  }


  /**
   * ShiftEntries create
   */
  export type ShiftEntriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftEntries.
     */
    data: XOR<ShiftEntriesCreateInput, ShiftEntriesUncheckedCreateInput>
  }


  /**
   * ShiftEntries createMany
   */
  export type ShiftEntriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftEntries.
     */
    data: ShiftEntriesCreateManyInput | ShiftEntriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShiftEntries update
   */
  export type ShiftEntriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftEntries.
     */
    data: XOR<ShiftEntriesUpdateInput, ShiftEntriesUncheckedUpdateInput>
    /**
     * Choose, which ShiftEntries to update.
     */
    where: ShiftEntriesWhereUniqueInput
  }


  /**
   * ShiftEntries updateMany
   */
  export type ShiftEntriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftEntries.
     */
    data: XOR<ShiftEntriesUpdateManyMutationInput, ShiftEntriesUncheckedUpdateManyInput>
    /**
     * Filter which ShiftEntries to update
     */
    where?: ShiftEntriesWhereInput
  }


  /**
   * ShiftEntries upsert
   */
  export type ShiftEntriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftEntries to update in case it exists.
     */
    where: ShiftEntriesWhereUniqueInput
    /**
     * In case the ShiftEntries found by the `where` argument doesn't exist, create a new ShiftEntries with this data.
     */
    create: XOR<ShiftEntriesCreateInput, ShiftEntriesUncheckedCreateInput>
    /**
     * In case the ShiftEntries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftEntriesUpdateInput, ShiftEntriesUncheckedUpdateInput>
  }


  /**
   * ShiftEntries delete
   */
  export type ShiftEntriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
    /**
     * Filter which ShiftEntries to delete.
     */
    where: ShiftEntriesWhereUniqueInput
  }


  /**
   * ShiftEntries deleteMany
   */
  export type ShiftEntriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftEntries to delete
     */
    where?: ShiftEntriesWhereInput
  }


  /**
   * ShiftEntries without action
   */
  export type ShiftEntriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftEntries
     */
    select?: ShiftEntriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftEntriesInclude<ExtArgs> | null
  }



  /**
   * Model Chalet
   */

  export type AggregateChalet = {
    _count: ChaletCountAggregateOutputType | null
    _avg: ChaletAvgAggregateOutputType | null
    _sum: ChaletSumAggregateOutputType | null
    _min: ChaletMinAggregateOutputType | null
    _max: ChaletMaxAggregateOutputType | null
  }

  export type ChaletAvgAggregateOutputType = {
    chaletId: number | null
  }

  export type ChaletSumAggregateOutputType = {
    chaletId: number | null
  }

  export type ChaletMinAggregateOutputType = {
    chaletId: number | null
    chaletNom: string | null
    cleanState: boolean | null
    workingOn: boolean | null
  }

  export type ChaletMaxAggregateOutputType = {
    chaletId: number | null
    chaletNom: string | null
    cleanState: boolean | null
    workingOn: boolean | null
  }

  export type ChaletCountAggregateOutputType = {
    chaletId: number
    chaletNom: number
    cleanState: number
    workingOn: number
    _all: number
  }


  export type ChaletAvgAggregateInputType = {
    chaletId?: true
  }

  export type ChaletSumAggregateInputType = {
    chaletId?: true
  }

  export type ChaletMinAggregateInputType = {
    chaletId?: true
    chaletNom?: true
    cleanState?: true
    workingOn?: true
  }

  export type ChaletMaxAggregateInputType = {
    chaletId?: true
    chaletNom?: true
    cleanState?: true
    workingOn?: true
  }

  export type ChaletCountAggregateInputType = {
    chaletId?: true
    chaletNom?: true
    cleanState?: true
    workingOn?: true
    _all?: true
  }

  export type ChaletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chalet to aggregate.
     */
    where?: ChaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chalets to fetch.
     */
    orderBy?: ChaletOrderByWithRelationInput | ChaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chalets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chalets
    **/
    _count?: true | ChaletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChaletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChaletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChaletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChaletMaxAggregateInputType
  }

  export type GetChaletAggregateType<T extends ChaletAggregateArgs> = {
        [P in keyof T & keyof AggregateChalet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChalet[P]>
      : GetScalarType<T[P], AggregateChalet[P]>
  }




  export type ChaletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaletWhereInput
    orderBy?: ChaletOrderByWithAggregationInput | ChaletOrderByWithAggregationInput[]
    by: ChaletScalarFieldEnum[] | ChaletScalarFieldEnum
    having?: ChaletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChaletCountAggregateInputType | true
    _avg?: ChaletAvgAggregateInputType
    _sum?: ChaletSumAggregateInputType
    _min?: ChaletMinAggregateInputType
    _max?: ChaletMaxAggregateInputType
  }

  export type ChaletGroupByOutputType = {
    chaletId: number
    chaletNom: string
    cleanState: boolean
    workingOn: boolean
    _count: ChaletCountAggregateOutputType | null
    _avg: ChaletAvgAggregateOutputType | null
    _sum: ChaletSumAggregateOutputType | null
    _min: ChaletMinAggregateOutputType | null
    _max: ChaletMaxAggregateOutputType | null
  }

  type GetChaletGroupByPayload<T extends ChaletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChaletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChaletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChaletGroupByOutputType[P]>
            : GetScalarType<T[P], ChaletGroupByOutputType[P]>
        }
      >
    >


  export type ChaletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chaletId?: boolean
    chaletNom?: boolean
    cleanState?: boolean
    workingOn?: boolean
    tasks?: boolean | Chalet$tasksArgs<ExtArgs>
    _count?: boolean | ChaletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chalet"]>

  export type ChaletSelectScalar = {
    chaletId?: boolean
    chaletNom?: boolean
    cleanState?: boolean
    workingOn?: boolean
  }

  export type ChaletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Chalet$tasksArgs<ExtArgs>
    _count?: boolean | ChaletCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChaletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chalet"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      chaletId: number
      chaletNom: string
      cleanState: boolean
      workingOn: boolean
    }, ExtArgs["result"]["chalet"]>
    composites: {}
  }


  type ChaletGetPayload<S extends boolean | null | undefined | ChaletDefaultArgs> = $Result.GetResult<Prisma.$ChaletPayload, S>

  type ChaletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChaletFindManyArgs, 'select' | 'include'> & {
      select?: ChaletCountAggregateInputType | true
    }

  export interface ChaletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chalet'], meta: { name: 'Chalet' } }
    /**
     * Find zero or one Chalet that matches the filter.
     * @param {ChaletFindUniqueArgs} args - Arguments to find a Chalet
     * @example
     * // Get one Chalet
     * const chalet = await prisma.chalet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChaletFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChaletFindUniqueArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chalet that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChaletFindUniqueOrThrowArgs} args - Arguments to find a Chalet
     * @example
     * // Get one Chalet
     * const chalet = await prisma.chalet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChaletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChaletFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chalet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletFindFirstArgs} args - Arguments to find a Chalet
     * @example
     * // Get one Chalet
     * const chalet = await prisma.chalet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChaletFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChaletFindFirstArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chalet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletFindFirstOrThrowArgs} args - Arguments to find a Chalet
     * @example
     * // Get one Chalet
     * const chalet = await prisma.chalet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChaletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChaletFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chalets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chalets
     * const chalets = await prisma.chalet.findMany()
     * 
     * // Get first 10 Chalets
     * const chalets = await prisma.chalet.findMany({ take: 10 })
     * 
     * // Only select the `chaletId`
     * const chaletWithChaletIdOnly = await prisma.chalet.findMany({ select: { chaletId: true } })
     * 
    **/
    findMany<T extends ChaletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChaletFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chalet.
     * @param {ChaletCreateArgs} args - Arguments to create a Chalet.
     * @example
     * // Create one Chalet
     * const Chalet = await prisma.chalet.create({
     *   data: {
     *     // ... data to create a Chalet
     *   }
     * })
     * 
    **/
    create<T extends ChaletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChaletCreateArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chalets.
     *     @param {ChaletCreateManyArgs} args - Arguments to create many Chalets.
     *     @example
     *     // Create many Chalets
     *     const chalet = await prisma.chalet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChaletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChaletCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chalet.
     * @param {ChaletDeleteArgs} args - Arguments to delete one Chalet.
     * @example
     * // Delete one Chalet
     * const Chalet = await prisma.chalet.delete({
     *   where: {
     *     // ... filter to delete one Chalet
     *   }
     * })
     * 
    **/
    delete<T extends ChaletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChaletDeleteArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chalet.
     * @param {ChaletUpdateArgs} args - Arguments to update one Chalet.
     * @example
     * // Update one Chalet
     * const chalet = await prisma.chalet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChaletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChaletUpdateArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chalets.
     * @param {ChaletDeleteManyArgs} args - Arguments to filter Chalets to delete.
     * @example
     * // Delete a few Chalets
     * const { count } = await prisma.chalet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChaletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChaletDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chalets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chalets
     * const chalet = await prisma.chalet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChaletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChaletUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chalet.
     * @param {ChaletUpsertArgs} args - Arguments to update or create a Chalet.
     * @example
     * // Update or create a Chalet
     * const chalet = await prisma.chalet.upsert({
     *   create: {
     *     // ... data to create a Chalet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chalet we want to update
     *   }
     * })
    **/
    upsert<T extends ChaletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChaletUpsertArgs<ExtArgs>>
    ): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chalets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletCountArgs} args - Arguments to filter Chalets to count.
     * @example
     * // Count the number of Chalets
     * const count = await prisma.chalet.count({
     *   where: {
     *     // ... the filter for the Chalets we want to count
     *   }
     * })
    **/
    count<T extends ChaletCountArgs>(
      args?: Subset<T, ChaletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChaletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chalet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChaletAggregateArgs>(args: Subset<T, ChaletAggregateArgs>): Prisma.PrismaPromise<GetChaletAggregateType<T>>

    /**
     * Group by Chalet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChaletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChaletGroupByArgs['orderBy'] }
        : { orderBy?: ChaletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChaletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chalet model
   */
  readonly fields: ChaletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chalet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChaletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends Chalet$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Chalet$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Chalet model
   */ 
  interface ChaletFieldRefs {
    readonly chaletId: FieldRef<"Chalet", 'Int'>
    readonly chaletNom: FieldRef<"Chalet", 'String'>
    readonly cleanState: FieldRef<"Chalet", 'Boolean'>
    readonly workingOn: FieldRef<"Chalet", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Chalet findUnique
   */
  export type ChaletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * Filter, which Chalet to fetch.
     */
    where: ChaletWhereUniqueInput
  }


  /**
   * Chalet findUniqueOrThrow
   */
  export type ChaletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * Filter, which Chalet to fetch.
     */
    where: ChaletWhereUniqueInput
  }


  /**
   * Chalet findFirst
   */
  export type ChaletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * Filter, which Chalet to fetch.
     */
    where?: ChaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chalets to fetch.
     */
    orderBy?: ChaletOrderByWithRelationInput | ChaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chalets.
     */
    cursor?: ChaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chalets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chalets.
     */
    distinct?: ChaletScalarFieldEnum | ChaletScalarFieldEnum[]
  }


  /**
   * Chalet findFirstOrThrow
   */
  export type ChaletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * Filter, which Chalet to fetch.
     */
    where?: ChaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chalets to fetch.
     */
    orderBy?: ChaletOrderByWithRelationInput | ChaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chalets.
     */
    cursor?: ChaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chalets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chalets.
     */
    distinct?: ChaletScalarFieldEnum | ChaletScalarFieldEnum[]
  }


  /**
   * Chalet findMany
   */
  export type ChaletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * Filter, which Chalets to fetch.
     */
    where?: ChaletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chalets to fetch.
     */
    orderBy?: ChaletOrderByWithRelationInput | ChaletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chalets.
     */
    cursor?: ChaletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chalets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chalets.
     */
    skip?: number
    distinct?: ChaletScalarFieldEnum | ChaletScalarFieldEnum[]
  }


  /**
   * Chalet create
   */
  export type ChaletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * The data needed to create a Chalet.
     */
    data: XOR<ChaletCreateInput, ChaletUncheckedCreateInput>
  }


  /**
   * Chalet createMany
   */
  export type ChaletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chalets.
     */
    data: ChaletCreateManyInput | ChaletCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Chalet update
   */
  export type ChaletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * The data needed to update a Chalet.
     */
    data: XOR<ChaletUpdateInput, ChaletUncheckedUpdateInput>
    /**
     * Choose, which Chalet to update.
     */
    where: ChaletWhereUniqueInput
  }


  /**
   * Chalet updateMany
   */
  export type ChaletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chalets.
     */
    data: XOR<ChaletUpdateManyMutationInput, ChaletUncheckedUpdateManyInput>
    /**
     * Filter which Chalets to update
     */
    where?: ChaletWhereInput
  }


  /**
   * Chalet upsert
   */
  export type ChaletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * The filter to search for the Chalet to update in case it exists.
     */
    where: ChaletWhereUniqueInput
    /**
     * In case the Chalet found by the `where` argument doesn't exist, create a new Chalet with this data.
     */
    create: XOR<ChaletCreateInput, ChaletUncheckedCreateInput>
    /**
     * In case the Chalet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChaletUpdateInput, ChaletUncheckedUpdateInput>
  }


  /**
   * Chalet delete
   */
  export type ChaletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    /**
     * Filter which Chalet to delete.
     */
    where: ChaletWhereUniqueInput
  }


  /**
   * Chalet deleteMany
   */
  export type ChaletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chalets to delete
     */
    where?: ChaletWhereInput
  }


  /**
   * Chalet.tasks
   */
  export type Chalet$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Chalet without action
   */
  export type ChaletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
  }



  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    taskId: number | null
    cleanerId: number | null
    chaletId: number | null
  }

  export type TaskSumAggregateOutputType = {
    taskId: number | null
    cleanerId: number | null
    chaletId: number | null
  }

  export type TaskMinAggregateOutputType = {
    taskId: number | null
    chaletNom: string | null
    cleanerId: number | null
    chaletId: number | null
    startTime: string | null
    endTime: string | null
    totalTime: string | null
    completed: boolean | null
  }

  export type TaskMaxAggregateOutputType = {
    taskId: number | null
    chaletNom: string | null
    cleanerId: number | null
    chaletId: number | null
    startTime: string | null
    endTime: string | null
    totalTime: string | null
    completed: boolean | null
  }

  export type TaskCountAggregateOutputType = {
    taskId: number
    chaletNom: number
    cleanerId: number
    chaletId: number
    startTime: number
    endTime: number
    totalTime: number
    completed: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    taskId?: true
    cleanerId?: true
    chaletId?: true
  }

  export type TaskSumAggregateInputType = {
    taskId?: true
    cleanerId?: true
    chaletId?: true
  }

  export type TaskMinAggregateInputType = {
    taskId?: true
    chaletNom?: true
    cleanerId?: true
    chaletId?: true
    startTime?: true
    endTime?: true
    totalTime?: true
    completed?: true
  }

  export type TaskMaxAggregateInputType = {
    taskId?: true
    chaletNom?: true
    cleanerId?: true
    chaletId?: true
    startTime?: true
    endTime?: true
    totalTime?: true
    completed?: true
  }

  export type TaskCountAggregateInputType = {
    taskId?: true
    chaletNom?: true
    cleanerId?: true
    chaletId?: true
    startTime?: true
    endTime?: true
    totalTime?: true
    completed?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    taskId: number
    chaletNom: string | null
    cleanerId: number | null
    chaletId: number | null
    startTime: string | null
    endTime: string | null
    totalTime: string | null
    completed: boolean
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    chaletNom?: boolean
    cleanerId?: boolean
    chaletId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalTime?: boolean
    completed?: boolean
    cleaner?: boolean | Task$cleanerArgs<ExtArgs>
    chalet?: boolean | Task$chaletArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    taskId?: boolean
    chaletNom?: boolean
    cleanerId?: boolean
    chaletId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalTime?: boolean
    completed?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleaner?: boolean | Task$cleanerArgs<ExtArgs>
    chalet?: boolean | Task$chaletArgs<ExtArgs>
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      cleaner: Prisma.$UserPayload<ExtArgs> | null
      chalet: Prisma.$ChaletPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: number
      chaletNom: string | null
      cleanerId: number | null
      chaletId: number | null
      startTime: string | null
      endTime: string | null
      totalTime: string | null
      completed: boolean
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const taskWithTaskIdOnly = await prisma.task.findMany({ select: { taskId: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cleaner<T extends Task$cleanerArgs<ExtArgs> = {}>(args?: Subset<T, Task$cleanerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    chalet<T extends Task$chaletArgs<ExtArgs> = {}>(args?: Subset<T, Task$chaletArgs<ExtArgs>>): Prisma__ChaletClient<$Result.GetResult<Prisma.$ChaletPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly taskId: FieldRef<"Task", 'Int'>
    readonly chaletNom: FieldRef<"Task", 'String'>
    readonly cleanerId: FieldRef<"Task", 'Int'>
    readonly chaletId: FieldRef<"Task", 'Int'>
    readonly startTime: FieldRef<"Task", 'String'>
    readonly endTime: FieldRef<"Task", 'String'>
    readonly totalTime: FieldRef<"Task", 'String'>
    readonly completed: FieldRef<"Task", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data?: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }


  /**
   * Task.cleaner
   */
  export type Task$cleanerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Task.chalet
   */
  export type Task$chaletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chalet
     */
    select?: ChaletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChaletInclude<ExtArgs> | null
    where?: ChaletWhereInput
  }


  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
  }



  /**
   * Model savedMessages
   */

  export type AggregateSavedMessages = {
    _count: SavedMessagesCountAggregateOutputType | null
    _avg: SavedMessagesAvgAggregateOutputType | null
    _sum: SavedMessagesSumAggregateOutputType | null
    _min: SavedMessagesMinAggregateOutputType | null
    _max: SavedMessagesMaxAggregateOutputType | null
  }

  export type SavedMessagesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedMessagesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedMessagesMinAggregateOutputType = {
    id: number | null
    message: string | null
    userId: number | null
  }

  export type SavedMessagesMaxAggregateOutputType = {
    id: number | null
    message: string | null
    userId: number | null
  }

  export type SavedMessagesCountAggregateOutputType = {
    id: number
    message: number
    userId: number
    _all: number
  }


  export type SavedMessagesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedMessagesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedMessagesMinAggregateInputType = {
    id?: true
    message?: true
    userId?: true
  }

  export type SavedMessagesMaxAggregateInputType = {
    id?: true
    message?: true
    userId?: true
  }

  export type SavedMessagesCountAggregateInputType = {
    id?: true
    message?: true
    userId?: true
    _all?: true
  }

  export type SavedMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which savedMessages to aggregate.
     */
    where?: savedMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savedMessages to fetch.
     */
    orderBy?: savedMessagesOrderByWithRelationInput | savedMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: savedMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned savedMessages
    **/
    _count?: true | SavedMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedMessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedMessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedMessagesMaxAggregateInputType
  }

  export type GetSavedMessagesAggregateType<T extends SavedMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedMessages[P]>
      : GetScalarType<T[P], AggregateSavedMessages[P]>
  }




  export type savedMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savedMessagesWhereInput
    orderBy?: savedMessagesOrderByWithAggregationInput | savedMessagesOrderByWithAggregationInput[]
    by: SavedMessagesScalarFieldEnum[] | SavedMessagesScalarFieldEnum
    having?: savedMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedMessagesCountAggregateInputType | true
    _avg?: SavedMessagesAvgAggregateInputType
    _sum?: SavedMessagesSumAggregateInputType
    _min?: SavedMessagesMinAggregateInputType
    _max?: SavedMessagesMaxAggregateInputType
  }

  export type SavedMessagesGroupByOutputType = {
    id: number
    message: string
    userId: number
    _count: SavedMessagesCountAggregateOutputType | null
    _avg: SavedMessagesAvgAggregateOutputType | null
    _sum: SavedMessagesSumAggregateOutputType | null
    _min: SavedMessagesMinAggregateOutputType | null
    _max: SavedMessagesMaxAggregateOutputType | null
  }

  type GetSavedMessagesGroupByPayload<T extends savedMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], SavedMessagesGroupByOutputType[P]>
        }
      >
    >


  export type savedMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedMessages"]>

  export type savedMessagesSelectScalar = {
    id?: boolean
    message?: boolean
    userId?: boolean
  }

  export type savedMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $savedMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "savedMessages"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      userId: number
    }, ExtArgs["result"]["savedMessages"]>
    composites: {}
  }


  type savedMessagesGetPayload<S extends boolean | null | undefined | savedMessagesDefaultArgs> = $Result.GetResult<Prisma.$savedMessagesPayload, S>

  type savedMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<savedMessagesFindManyArgs, 'select' | 'include'> & {
      select?: SavedMessagesCountAggregateInputType | true
    }

  export interface savedMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['savedMessages'], meta: { name: 'savedMessages' } }
    /**
     * Find zero or one SavedMessages that matches the filter.
     * @param {savedMessagesFindUniqueArgs} args - Arguments to find a SavedMessages
     * @example
     * // Get one SavedMessages
     * const savedMessages = await prisma.savedMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends savedMessagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, savedMessagesFindUniqueArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SavedMessages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {savedMessagesFindUniqueOrThrowArgs} args - Arguments to find a SavedMessages
     * @example
     * // Get one SavedMessages
     * const savedMessages = await prisma.savedMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends savedMessagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, savedMessagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SavedMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savedMessagesFindFirstArgs} args - Arguments to find a SavedMessages
     * @example
     * // Get one SavedMessages
     * const savedMessages = await prisma.savedMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends savedMessagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, savedMessagesFindFirstArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SavedMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savedMessagesFindFirstOrThrowArgs} args - Arguments to find a SavedMessages
     * @example
     * // Get one SavedMessages
     * const savedMessages = await prisma.savedMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends savedMessagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, savedMessagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SavedMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savedMessagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedMessages
     * const savedMessages = await prisma.savedMessages.findMany()
     * 
     * // Get first 10 SavedMessages
     * const savedMessages = await prisma.savedMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedMessagesWithIdOnly = await prisma.savedMessages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends savedMessagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, savedMessagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SavedMessages.
     * @param {savedMessagesCreateArgs} args - Arguments to create a SavedMessages.
     * @example
     * // Create one SavedMessages
     * const SavedMessages = await prisma.savedMessages.create({
     *   data: {
     *     // ... data to create a SavedMessages
     *   }
     * })
     * 
    **/
    create<T extends savedMessagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, savedMessagesCreateArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SavedMessages.
     *     @param {savedMessagesCreateManyArgs} args - Arguments to create many SavedMessages.
     *     @example
     *     // Create many SavedMessages
     *     const savedMessages = await prisma.savedMessages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends savedMessagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, savedMessagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedMessages.
     * @param {savedMessagesDeleteArgs} args - Arguments to delete one SavedMessages.
     * @example
     * // Delete one SavedMessages
     * const SavedMessages = await prisma.savedMessages.delete({
     *   where: {
     *     // ... filter to delete one SavedMessages
     *   }
     * })
     * 
    **/
    delete<T extends savedMessagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, savedMessagesDeleteArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SavedMessages.
     * @param {savedMessagesUpdateArgs} args - Arguments to update one SavedMessages.
     * @example
     * // Update one SavedMessages
     * const savedMessages = await prisma.savedMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends savedMessagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, savedMessagesUpdateArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SavedMessages.
     * @param {savedMessagesDeleteManyArgs} args - Arguments to filter SavedMessages to delete.
     * @example
     * // Delete a few SavedMessages
     * const { count } = await prisma.savedMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends savedMessagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, savedMessagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savedMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedMessages
     * const savedMessages = await prisma.savedMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends savedMessagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, savedMessagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedMessages.
     * @param {savedMessagesUpsertArgs} args - Arguments to update or create a SavedMessages.
     * @example
     * // Update or create a SavedMessages
     * const savedMessages = await prisma.savedMessages.upsert({
     *   create: {
     *     // ... data to create a SavedMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedMessages we want to update
     *   }
     * })
    **/
    upsert<T extends savedMessagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, savedMessagesUpsertArgs<ExtArgs>>
    ): Prisma__savedMessagesClient<$Result.GetResult<Prisma.$savedMessagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SavedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savedMessagesCountArgs} args - Arguments to filter SavedMessages to count.
     * @example
     * // Count the number of SavedMessages
     * const count = await prisma.savedMessages.count({
     *   where: {
     *     // ... the filter for the SavedMessages we want to count
     *   }
     * })
    **/
    count<T extends savedMessagesCountArgs>(
      args?: Subset<T, savedMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedMessagesAggregateArgs>(args: Subset<T, SavedMessagesAggregateArgs>): Prisma.PrismaPromise<GetSavedMessagesAggregateType<T>>

    /**
     * Group by SavedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savedMessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends savedMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: savedMessagesGroupByArgs['orderBy'] }
        : { orderBy?: savedMessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, savedMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the savedMessages model
   */
  readonly fields: savedMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for savedMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__savedMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the savedMessages model
   */ 
  interface savedMessagesFieldRefs {
    readonly id: FieldRef<"savedMessages", 'Int'>
    readonly message: FieldRef<"savedMessages", 'String'>
    readonly userId: FieldRef<"savedMessages", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * savedMessages findUnique
   */
  export type savedMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * Filter, which savedMessages to fetch.
     */
    where: savedMessagesWhereUniqueInput
  }


  /**
   * savedMessages findUniqueOrThrow
   */
  export type savedMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * Filter, which savedMessages to fetch.
     */
    where: savedMessagesWhereUniqueInput
  }


  /**
   * savedMessages findFirst
   */
  export type savedMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * Filter, which savedMessages to fetch.
     */
    where?: savedMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savedMessages to fetch.
     */
    orderBy?: savedMessagesOrderByWithRelationInput | savedMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for savedMessages.
     */
    cursor?: savedMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savedMessages.
     */
    distinct?: SavedMessagesScalarFieldEnum | SavedMessagesScalarFieldEnum[]
  }


  /**
   * savedMessages findFirstOrThrow
   */
  export type savedMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * Filter, which savedMessages to fetch.
     */
    where?: savedMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savedMessages to fetch.
     */
    orderBy?: savedMessagesOrderByWithRelationInput | savedMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for savedMessages.
     */
    cursor?: savedMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savedMessages.
     */
    distinct?: SavedMessagesScalarFieldEnum | SavedMessagesScalarFieldEnum[]
  }


  /**
   * savedMessages findMany
   */
  export type savedMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * Filter, which savedMessages to fetch.
     */
    where?: savedMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savedMessages to fetch.
     */
    orderBy?: savedMessagesOrderByWithRelationInput | savedMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing savedMessages.
     */
    cursor?: savedMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savedMessages.
     */
    skip?: number
    distinct?: SavedMessagesScalarFieldEnum | SavedMessagesScalarFieldEnum[]
  }


  /**
   * savedMessages create
   */
  export type savedMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a savedMessages.
     */
    data: XOR<savedMessagesCreateInput, savedMessagesUncheckedCreateInput>
  }


  /**
   * savedMessages createMany
   */
  export type savedMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many savedMessages.
     */
    data: savedMessagesCreateManyInput | savedMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * savedMessages update
   */
  export type savedMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a savedMessages.
     */
    data: XOR<savedMessagesUpdateInput, savedMessagesUncheckedUpdateInput>
    /**
     * Choose, which savedMessages to update.
     */
    where: savedMessagesWhereUniqueInput
  }


  /**
   * savedMessages updateMany
   */
  export type savedMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update savedMessages.
     */
    data: XOR<savedMessagesUpdateManyMutationInput, savedMessagesUncheckedUpdateManyInput>
    /**
     * Filter which savedMessages to update
     */
    where?: savedMessagesWhereInput
  }


  /**
   * savedMessages upsert
   */
  export type savedMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the savedMessages to update in case it exists.
     */
    where: savedMessagesWhereUniqueInput
    /**
     * In case the savedMessages found by the `where` argument doesn't exist, create a new savedMessages with this data.
     */
    create: XOR<savedMessagesCreateInput, savedMessagesUncheckedCreateInput>
    /**
     * In case the savedMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<savedMessagesUpdateInput, savedMessagesUncheckedUpdateInput>
  }


  /**
   * savedMessages delete
   */
  export type savedMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
    /**
     * Filter which savedMessages to delete.
     */
    where: savedMessagesWhereUniqueInput
  }


  /**
   * savedMessages deleteMany
   */
  export type savedMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which savedMessages to delete
     */
    where?: savedMessagesWhereInput
  }


  /**
   * savedMessages without action
   */
  export type savedMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savedMessages
     */
    select?: savedMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: savedMessagesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    loggedIn: 'loggedIn',
    password: 'password',
    usrAuthTokn: 'usrAuthTokn'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShiftEntriesScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    userId: 'userId',
    shiftStart: 'shiftStart',
    shiftEnd: 'shiftEnd',
    hoursWorkd: 'hoursWorkd'
  };

  export type ShiftEntriesScalarFieldEnum = (typeof ShiftEntriesScalarFieldEnum)[keyof typeof ShiftEntriesScalarFieldEnum]


  export const ChaletScalarFieldEnum: {
    chaletId: 'chaletId',
    chaletNom: 'chaletNom',
    cleanState: 'cleanState',
    workingOn: 'workingOn'
  };

  export type ChaletScalarFieldEnum = (typeof ChaletScalarFieldEnum)[keyof typeof ChaletScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    taskId: 'taskId',
    chaletNom: 'chaletNom',
    cleanerId: 'cleanerId',
    chaletId: 'chaletId',
    startTime: 'startTime',
    endTime: 'endTime',
    totalTime: 'totalTime',
    completed: 'completed'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SavedMessagesScalarFieldEnum: {
    id: 'id',
    message: 'message',
    userId: 'userId'
  };

  export type SavedMessagesScalarFieldEnum = (typeof SavedMessagesScalarFieldEnum)[keyof typeof SavedMessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    loggedIn?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    usrAuthTokn?: StringFilter<"User"> | string
    tasks?: TaskListRelationFilter
    shifts?: ShiftEntriesListRelationFilter
    messages?: SavedMessagesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    loggedIn?: SortOrder
    password?: SortOrder
    usrAuthTokn?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    shifts?: ShiftEntriesOrderByRelationAggregateInput
    messages?: savedMessagesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usrAuthTokn?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    loggedIn?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    tasks?: TaskListRelationFilter
    shifts?: ShiftEntriesListRelationFilter
    messages?: SavedMessagesListRelationFilter
  }, "id" | "usrAuthTokn">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    loggedIn?: SortOrder
    password?: SortOrder
    usrAuthTokn?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    loggedIn?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    usrAuthTokn?: StringWithAggregatesFilter<"User"> | string
  }

  export type ShiftEntriesWhereInput = {
    AND?: ShiftEntriesWhereInput | ShiftEntriesWhereInput[]
    OR?: ShiftEntriesWhereInput[]
    NOT?: ShiftEntriesWhereInput | ShiftEntriesWhereInput[]
    id?: IntFilter<"ShiftEntries"> | number
    userName?: StringFilter<"ShiftEntries"> | string
    userId?: IntFilter<"ShiftEntries"> | number
    shiftStart?: StringFilter<"ShiftEntries"> | string
    shiftEnd?: StringNullableFilter<"ShiftEntries"> | string | null
    hoursWorkd?: StringNullableFilter<"ShiftEntries"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ShiftEntriesOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrderInput | SortOrder
    hoursWorkd?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ShiftEntriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShiftEntriesWhereInput | ShiftEntriesWhereInput[]
    OR?: ShiftEntriesWhereInput[]
    NOT?: ShiftEntriesWhereInput | ShiftEntriesWhereInput[]
    userName?: StringFilter<"ShiftEntries"> | string
    userId?: IntFilter<"ShiftEntries"> | number
    shiftStart?: StringFilter<"ShiftEntries"> | string
    shiftEnd?: StringNullableFilter<"ShiftEntries"> | string | null
    hoursWorkd?: StringNullableFilter<"ShiftEntries"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ShiftEntriesOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrderInput | SortOrder
    hoursWorkd?: SortOrderInput | SortOrder
    _count?: ShiftEntriesCountOrderByAggregateInput
    _avg?: ShiftEntriesAvgOrderByAggregateInput
    _max?: ShiftEntriesMaxOrderByAggregateInput
    _min?: ShiftEntriesMinOrderByAggregateInput
    _sum?: ShiftEntriesSumOrderByAggregateInput
  }

  export type ShiftEntriesScalarWhereWithAggregatesInput = {
    AND?: ShiftEntriesScalarWhereWithAggregatesInput | ShiftEntriesScalarWhereWithAggregatesInput[]
    OR?: ShiftEntriesScalarWhereWithAggregatesInput[]
    NOT?: ShiftEntriesScalarWhereWithAggregatesInput | ShiftEntriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShiftEntries"> | number
    userName?: StringWithAggregatesFilter<"ShiftEntries"> | string
    userId?: IntWithAggregatesFilter<"ShiftEntries"> | number
    shiftStart?: StringWithAggregatesFilter<"ShiftEntries"> | string
    shiftEnd?: StringNullableWithAggregatesFilter<"ShiftEntries"> | string | null
    hoursWorkd?: StringNullableWithAggregatesFilter<"ShiftEntries"> | string | null
  }

  export type ChaletWhereInput = {
    AND?: ChaletWhereInput | ChaletWhereInput[]
    OR?: ChaletWhereInput[]
    NOT?: ChaletWhereInput | ChaletWhereInput[]
    chaletId?: IntFilter<"Chalet"> | number
    chaletNom?: StringFilter<"Chalet"> | string
    cleanState?: BoolFilter<"Chalet"> | boolean
    workingOn?: BoolFilter<"Chalet"> | boolean
    tasks?: TaskListRelationFilter
  }

  export type ChaletOrderByWithRelationInput = {
    chaletId?: SortOrder
    chaletNom?: SortOrder
    cleanState?: SortOrder
    workingOn?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ChaletWhereUniqueInput = Prisma.AtLeast<{
    chaletId?: number
    AND?: ChaletWhereInput | ChaletWhereInput[]
    OR?: ChaletWhereInput[]
    NOT?: ChaletWhereInput | ChaletWhereInput[]
    chaletNom?: StringFilter<"Chalet"> | string
    cleanState?: BoolFilter<"Chalet"> | boolean
    workingOn?: BoolFilter<"Chalet"> | boolean
    tasks?: TaskListRelationFilter
  }, "chaletId">

  export type ChaletOrderByWithAggregationInput = {
    chaletId?: SortOrder
    chaletNom?: SortOrder
    cleanState?: SortOrder
    workingOn?: SortOrder
    _count?: ChaletCountOrderByAggregateInput
    _avg?: ChaletAvgOrderByAggregateInput
    _max?: ChaletMaxOrderByAggregateInput
    _min?: ChaletMinOrderByAggregateInput
    _sum?: ChaletSumOrderByAggregateInput
  }

  export type ChaletScalarWhereWithAggregatesInput = {
    AND?: ChaletScalarWhereWithAggregatesInput | ChaletScalarWhereWithAggregatesInput[]
    OR?: ChaletScalarWhereWithAggregatesInput[]
    NOT?: ChaletScalarWhereWithAggregatesInput | ChaletScalarWhereWithAggregatesInput[]
    chaletId?: IntWithAggregatesFilter<"Chalet"> | number
    chaletNom?: StringWithAggregatesFilter<"Chalet"> | string
    cleanState?: BoolWithAggregatesFilter<"Chalet"> | boolean
    workingOn?: BoolWithAggregatesFilter<"Chalet"> | boolean
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    taskId?: IntFilter<"Task"> | number
    chaletNom?: StringNullableFilter<"Task"> | string | null
    cleanerId?: IntNullableFilter<"Task"> | number | null
    chaletId?: IntNullableFilter<"Task"> | number | null
    startTime?: StringNullableFilter<"Task"> | string | null
    endTime?: StringNullableFilter<"Task"> | string | null
    totalTime?: StringNullableFilter<"Task"> | string | null
    completed?: BoolFilter<"Task"> | boolean
    cleaner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    chalet?: XOR<ChaletNullableRelationFilter, ChaletWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    taskId?: SortOrder
    chaletNom?: SortOrderInput | SortOrder
    cleanerId?: SortOrderInput | SortOrder
    chaletId?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    totalTime?: SortOrderInput | SortOrder
    completed?: SortOrder
    cleaner?: UserOrderByWithRelationInput
    chalet?: ChaletOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    taskId?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    chaletNom?: StringNullableFilter<"Task"> | string | null
    cleanerId?: IntNullableFilter<"Task"> | number | null
    chaletId?: IntNullableFilter<"Task"> | number | null
    startTime?: StringNullableFilter<"Task"> | string | null
    endTime?: StringNullableFilter<"Task"> | string | null
    totalTime?: StringNullableFilter<"Task"> | string | null
    completed?: BoolFilter<"Task"> | boolean
    cleaner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    chalet?: XOR<ChaletNullableRelationFilter, ChaletWhereInput> | null
  }, "taskId">

  export type TaskOrderByWithAggregationInput = {
    taskId?: SortOrder
    chaletNom?: SortOrderInput | SortOrder
    cleanerId?: SortOrderInput | SortOrder
    chaletId?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    totalTime?: SortOrderInput | SortOrder
    completed?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    taskId?: IntWithAggregatesFilter<"Task"> | number
    chaletNom?: StringNullableWithAggregatesFilter<"Task"> | string | null
    cleanerId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    chaletId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    startTime?: StringNullableWithAggregatesFilter<"Task"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"Task"> | string | null
    totalTime?: StringNullableWithAggregatesFilter<"Task"> | string | null
    completed?: BoolWithAggregatesFilter<"Task"> | boolean
  }

  export type savedMessagesWhereInput = {
    AND?: savedMessagesWhereInput | savedMessagesWhereInput[]
    OR?: savedMessagesWhereInput[]
    NOT?: savedMessagesWhereInput | savedMessagesWhereInput[]
    id?: IntFilter<"savedMessages"> | number
    message?: StringFilter<"savedMessages"> | string
    userId?: IntFilter<"savedMessages"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type savedMessagesOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type savedMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: savedMessagesWhereInput | savedMessagesWhereInput[]
    OR?: savedMessagesWhereInput[]
    NOT?: savedMessagesWhereInput | savedMessagesWhereInput[]
    message?: StringFilter<"savedMessages"> | string
    userId?: IntFilter<"savedMessages"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type savedMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    _count?: savedMessagesCountOrderByAggregateInput
    _avg?: savedMessagesAvgOrderByAggregateInput
    _max?: savedMessagesMaxOrderByAggregateInput
    _min?: savedMessagesMinOrderByAggregateInput
    _sum?: savedMessagesSumOrderByAggregateInput
  }

  export type savedMessagesScalarWhereWithAggregatesInput = {
    AND?: savedMessagesScalarWhereWithAggregatesInput | savedMessagesScalarWhereWithAggregatesInput[]
    OR?: savedMessagesScalarWhereWithAggregatesInput[]
    NOT?: savedMessagesScalarWhereWithAggregatesInput | savedMessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"savedMessages"> | number
    message?: StringWithAggregatesFilter<"savedMessages"> | string
    userId?: IntWithAggregatesFilter<"savedMessages"> | number
  }

  export type UserCreateInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    tasks?: TaskCreateNestedManyWithoutCleanerInput
    shifts?: ShiftEntriesCreateNestedManyWithoutUserInput
    messages?: savedMessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCleanerInput
    shifts?: ShiftEntriesUncheckedCreateNestedManyWithoutUserInput
    messages?: savedMessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutCleanerNestedInput
    shifts?: ShiftEntriesUpdateManyWithoutUserNestedInput
    messages?: savedMessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCleanerNestedInput
    shifts?: ShiftEntriesUncheckedUpdateManyWithoutUserNestedInput
    messages?: savedMessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
  }

  export type UserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftEntriesCreateInput = {
    userName: string
    shiftStart: string
    shiftEnd?: string | null
    hoursWorkd?: string | null
    user: UserCreateNestedOneWithoutShiftsInput
  }

  export type ShiftEntriesUncheckedCreateInput = {
    id?: number
    userName: string
    userId: number
    shiftStart: string
    shiftEnd?: string | null
    hoursWorkd?: string | null
  }

  export type ShiftEntriesUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutShiftsNestedInput
  }

  export type ShiftEntriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftEntriesCreateManyInput = {
    id?: number
    userName: string
    userId: number
    shiftStart: string
    shiftEnd?: string | null
    hoursWorkd?: string | null
  }

  export type ShiftEntriesUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftEntriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChaletCreateInput = {
    chaletNom: string
    cleanState?: boolean
    workingOn?: boolean
    tasks?: TaskCreateNestedManyWithoutChaletInput
  }

  export type ChaletUncheckedCreateInput = {
    chaletId?: number
    chaletNom: string
    cleanState?: boolean
    workingOn?: boolean
    tasks?: TaskUncheckedCreateNestedManyWithoutChaletInput
  }

  export type ChaletUpdateInput = {
    chaletNom?: StringFieldUpdateOperationsInput | string
    cleanState?: BoolFieldUpdateOperationsInput | boolean
    workingOn?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUpdateManyWithoutChaletNestedInput
  }

  export type ChaletUncheckedUpdateInput = {
    chaletId?: IntFieldUpdateOperationsInput | number
    chaletNom?: StringFieldUpdateOperationsInput | string
    cleanState?: BoolFieldUpdateOperationsInput | boolean
    workingOn?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUncheckedUpdateManyWithoutChaletNestedInput
  }

  export type ChaletCreateManyInput = {
    chaletId?: number
    chaletNom: string
    cleanState?: boolean
    workingOn?: boolean
  }

  export type ChaletUpdateManyMutationInput = {
    chaletNom?: StringFieldUpdateOperationsInput | string
    cleanState?: BoolFieldUpdateOperationsInput | boolean
    workingOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChaletUncheckedUpdateManyInput = {
    chaletId?: IntFieldUpdateOperationsInput | number
    chaletNom?: StringFieldUpdateOperationsInput | string
    cleanState?: BoolFieldUpdateOperationsInput | boolean
    workingOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateInput = {
    chaletNom?: string | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
    cleaner?: UserCreateNestedOneWithoutTasksInput
    chalet?: ChaletCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    taskId?: number
    chaletNom?: string | null
    cleanerId?: number | null
    chaletId?: number | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
  }

  export type TaskUpdateInput = {
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    cleaner?: UserUpdateOneWithoutTasksNestedInput
    chalet?: ChaletUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    chaletId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateManyInput = {
    taskId?: number
    chaletNom?: string | null
    cleanerId?: number | null
    chaletId?: number | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
  }

  export type TaskUpdateManyMutationInput = {
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    chaletId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type savedMessagesCreateInput = {
    message: string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type savedMessagesUncheckedCreateInput = {
    id?: number
    message: string
    userId: number
  }

  export type savedMessagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type savedMessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type savedMessagesCreateManyInput = {
    id?: number
    message: string
    userId: number
  }

  export type savedMessagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type savedMessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ShiftEntriesListRelationFilter = {
    every?: ShiftEntriesWhereInput
    some?: ShiftEntriesWhereInput
    none?: ShiftEntriesWhereInput
  }

  export type SavedMessagesListRelationFilter = {
    every?: savedMessagesWhereInput
    some?: savedMessagesWhereInput
    none?: savedMessagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftEntriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type savedMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    loggedIn?: SortOrder
    password?: SortOrder
    usrAuthTokn?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    loggedIn?: SortOrder
    password?: SortOrder
    usrAuthTokn?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    loggedIn?: SortOrder
    password?: SortOrder
    usrAuthTokn?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShiftEntriesCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    hoursWorkd?: SortOrder
  }

  export type ShiftEntriesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ShiftEntriesMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    hoursWorkd?: SortOrder
  }

  export type ShiftEntriesMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    hoursWorkd?: SortOrder
  }

  export type ShiftEntriesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChaletCountOrderByAggregateInput = {
    chaletId?: SortOrder
    chaletNom?: SortOrder
    cleanState?: SortOrder
    workingOn?: SortOrder
  }

  export type ChaletAvgOrderByAggregateInput = {
    chaletId?: SortOrder
  }

  export type ChaletMaxOrderByAggregateInput = {
    chaletId?: SortOrder
    chaletNom?: SortOrder
    cleanState?: SortOrder
    workingOn?: SortOrder
  }

  export type ChaletMinOrderByAggregateInput = {
    chaletId?: SortOrder
    chaletNom?: SortOrder
    cleanState?: SortOrder
    workingOn?: SortOrder
  }

  export type ChaletSumOrderByAggregateInput = {
    chaletId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChaletNullableRelationFilter = {
    is?: ChaletWhereInput | null
    isNot?: ChaletWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    taskId?: SortOrder
    chaletNom?: SortOrder
    cleanerId?: SortOrder
    chaletId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalTime?: SortOrder
    completed?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    taskId?: SortOrder
    cleanerId?: SortOrder
    chaletId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    taskId?: SortOrder
    chaletNom?: SortOrder
    cleanerId?: SortOrder
    chaletId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalTime?: SortOrder
    completed?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    taskId?: SortOrder
    chaletNom?: SortOrder
    cleanerId?: SortOrder
    chaletId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalTime?: SortOrder
    completed?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    taskId?: SortOrder
    cleanerId?: SortOrder
    chaletId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type savedMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type savedMessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type savedMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type savedMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type savedMessagesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TaskCreateNestedManyWithoutCleanerInput = {
    create?: XOR<TaskCreateWithoutCleanerInput, TaskUncheckedCreateWithoutCleanerInput> | TaskCreateWithoutCleanerInput[] | TaskUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCleanerInput | TaskCreateOrConnectWithoutCleanerInput[]
    createMany?: TaskCreateManyCleanerInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ShiftEntriesCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftEntriesCreateWithoutUserInput, ShiftEntriesUncheckedCreateWithoutUserInput> | ShiftEntriesCreateWithoutUserInput[] | ShiftEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftEntriesCreateOrConnectWithoutUserInput | ShiftEntriesCreateOrConnectWithoutUserInput[]
    createMany?: ShiftEntriesCreateManyUserInputEnvelope
    connect?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
  }

  export type savedMessagesCreateNestedManyWithoutUserInput = {
    create?: XOR<savedMessagesCreateWithoutUserInput, savedMessagesUncheckedCreateWithoutUserInput> | savedMessagesCreateWithoutUserInput[] | savedMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savedMessagesCreateOrConnectWithoutUserInput | savedMessagesCreateOrConnectWithoutUserInput[]
    createMany?: savedMessagesCreateManyUserInputEnvelope
    connect?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCleanerInput = {
    create?: XOR<TaskCreateWithoutCleanerInput, TaskUncheckedCreateWithoutCleanerInput> | TaskCreateWithoutCleanerInput[] | TaskUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCleanerInput | TaskCreateOrConnectWithoutCleanerInput[]
    createMany?: TaskCreateManyCleanerInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ShiftEntriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftEntriesCreateWithoutUserInput, ShiftEntriesUncheckedCreateWithoutUserInput> | ShiftEntriesCreateWithoutUserInput[] | ShiftEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftEntriesCreateOrConnectWithoutUserInput | ShiftEntriesCreateOrConnectWithoutUserInput[]
    createMany?: ShiftEntriesCreateManyUserInputEnvelope
    connect?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
  }

  export type savedMessagesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<savedMessagesCreateWithoutUserInput, savedMessagesUncheckedCreateWithoutUserInput> | savedMessagesCreateWithoutUserInput[] | savedMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savedMessagesCreateOrConnectWithoutUserInput | savedMessagesCreateOrConnectWithoutUserInput[]
    createMany?: savedMessagesCreateManyUserInputEnvelope
    connect?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateManyWithoutCleanerNestedInput = {
    create?: XOR<TaskCreateWithoutCleanerInput, TaskUncheckedCreateWithoutCleanerInput> | TaskCreateWithoutCleanerInput[] | TaskUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCleanerInput | TaskCreateOrConnectWithoutCleanerInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCleanerInput | TaskUpsertWithWhereUniqueWithoutCleanerInput[]
    createMany?: TaskCreateManyCleanerInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCleanerInput | TaskUpdateWithWhereUniqueWithoutCleanerInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCleanerInput | TaskUpdateManyWithWhereWithoutCleanerInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ShiftEntriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftEntriesCreateWithoutUserInput, ShiftEntriesUncheckedCreateWithoutUserInput> | ShiftEntriesCreateWithoutUserInput[] | ShiftEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftEntriesCreateOrConnectWithoutUserInput | ShiftEntriesCreateOrConnectWithoutUserInput[]
    upsert?: ShiftEntriesUpsertWithWhereUniqueWithoutUserInput | ShiftEntriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftEntriesCreateManyUserInputEnvelope
    set?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    disconnect?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    delete?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    connect?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    update?: ShiftEntriesUpdateWithWhereUniqueWithoutUserInput | ShiftEntriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftEntriesUpdateManyWithWhereWithoutUserInput | ShiftEntriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftEntriesScalarWhereInput | ShiftEntriesScalarWhereInput[]
  }

  export type savedMessagesUpdateManyWithoutUserNestedInput = {
    create?: XOR<savedMessagesCreateWithoutUserInput, savedMessagesUncheckedCreateWithoutUserInput> | savedMessagesCreateWithoutUserInput[] | savedMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savedMessagesCreateOrConnectWithoutUserInput | savedMessagesCreateOrConnectWithoutUserInput[]
    upsert?: savedMessagesUpsertWithWhereUniqueWithoutUserInput | savedMessagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: savedMessagesCreateManyUserInputEnvelope
    set?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    disconnect?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    delete?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    connect?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    update?: savedMessagesUpdateWithWhereUniqueWithoutUserInput | savedMessagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: savedMessagesUpdateManyWithWhereWithoutUserInput | savedMessagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: savedMessagesScalarWhereInput | savedMessagesScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCleanerNestedInput = {
    create?: XOR<TaskCreateWithoutCleanerInput, TaskUncheckedCreateWithoutCleanerInput> | TaskCreateWithoutCleanerInput[] | TaskUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCleanerInput | TaskCreateOrConnectWithoutCleanerInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCleanerInput | TaskUpsertWithWhereUniqueWithoutCleanerInput[]
    createMany?: TaskCreateManyCleanerInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCleanerInput | TaskUpdateWithWhereUniqueWithoutCleanerInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCleanerInput | TaskUpdateManyWithWhereWithoutCleanerInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ShiftEntriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftEntriesCreateWithoutUserInput, ShiftEntriesUncheckedCreateWithoutUserInput> | ShiftEntriesCreateWithoutUserInput[] | ShiftEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftEntriesCreateOrConnectWithoutUserInput | ShiftEntriesCreateOrConnectWithoutUserInput[]
    upsert?: ShiftEntriesUpsertWithWhereUniqueWithoutUserInput | ShiftEntriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftEntriesCreateManyUserInputEnvelope
    set?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    disconnect?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    delete?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    connect?: ShiftEntriesWhereUniqueInput | ShiftEntriesWhereUniqueInput[]
    update?: ShiftEntriesUpdateWithWhereUniqueWithoutUserInput | ShiftEntriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftEntriesUpdateManyWithWhereWithoutUserInput | ShiftEntriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftEntriesScalarWhereInput | ShiftEntriesScalarWhereInput[]
  }

  export type savedMessagesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<savedMessagesCreateWithoutUserInput, savedMessagesUncheckedCreateWithoutUserInput> | savedMessagesCreateWithoutUserInput[] | savedMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savedMessagesCreateOrConnectWithoutUserInput | savedMessagesCreateOrConnectWithoutUserInput[]
    upsert?: savedMessagesUpsertWithWhereUniqueWithoutUserInput | savedMessagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: savedMessagesCreateManyUserInputEnvelope
    set?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    disconnect?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    delete?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    connect?: savedMessagesWhereUniqueInput | savedMessagesWhereUniqueInput[]
    update?: savedMessagesUpdateWithWhereUniqueWithoutUserInput | savedMessagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: savedMessagesUpdateManyWithWhereWithoutUserInput | savedMessagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: savedMessagesScalarWhereInput | savedMessagesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShiftsInput = {
    create?: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftsInput
    upsert?: UserUpsertWithoutShiftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShiftsInput, UserUpdateWithoutShiftsInput>, UserUncheckedUpdateWithoutShiftsInput>
  }

  export type TaskCreateNestedManyWithoutChaletInput = {
    create?: XOR<TaskCreateWithoutChaletInput, TaskUncheckedCreateWithoutChaletInput> | TaskCreateWithoutChaletInput[] | TaskUncheckedCreateWithoutChaletInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChaletInput | TaskCreateOrConnectWithoutChaletInput[]
    createMany?: TaskCreateManyChaletInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutChaletInput = {
    create?: XOR<TaskCreateWithoutChaletInput, TaskUncheckedCreateWithoutChaletInput> | TaskCreateWithoutChaletInput[] | TaskUncheckedCreateWithoutChaletInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChaletInput | TaskCreateOrConnectWithoutChaletInput[]
    createMany?: TaskCreateManyChaletInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutChaletNestedInput = {
    create?: XOR<TaskCreateWithoutChaletInput, TaskUncheckedCreateWithoutChaletInput> | TaskCreateWithoutChaletInput[] | TaskUncheckedCreateWithoutChaletInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChaletInput | TaskCreateOrConnectWithoutChaletInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutChaletInput | TaskUpsertWithWhereUniqueWithoutChaletInput[]
    createMany?: TaskCreateManyChaletInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutChaletInput | TaskUpdateWithWhereUniqueWithoutChaletInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutChaletInput | TaskUpdateManyWithWhereWithoutChaletInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutChaletNestedInput = {
    create?: XOR<TaskCreateWithoutChaletInput, TaskUncheckedCreateWithoutChaletInput> | TaskCreateWithoutChaletInput[] | TaskUncheckedCreateWithoutChaletInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutChaletInput | TaskCreateOrConnectWithoutChaletInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutChaletInput | TaskUpsertWithWhereUniqueWithoutChaletInput[]
    createMany?: TaskCreateManyChaletInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutChaletInput | TaskUpdateWithWhereUniqueWithoutChaletInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutChaletInput | TaskUpdateManyWithWhereWithoutChaletInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ChaletCreateNestedOneWithoutTasksInput = {
    create?: XOR<ChaletCreateWithoutTasksInput, ChaletUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChaletCreateOrConnectWithoutTasksInput
    connect?: ChaletWhereUniqueInput
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type ChaletUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ChaletCreateWithoutTasksInput, ChaletUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChaletCreateOrConnectWithoutTasksInput
    upsert?: ChaletUpsertWithoutTasksInput
    disconnect?: ChaletWhereInput | boolean
    delete?: ChaletWhereInput | boolean
    connect?: ChaletWhereUniqueInput
    update?: XOR<XOR<ChaletUpdateToOneWithWhereWithoutTasksInput, ChaletUpdateWithoutTasksInput>, ChaletUncheckedUpdateWithoutTasksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TaskCreateWithoutCleanerInput = {
    chaletNom?: string | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
    chalet?: ChaletCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutCleanerInput = {
    taskId?: number
    chaletNom?: string | null
    chaletId?: number | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
  }

  export type TaskCreateOrConnectWithoutCleanerInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCleanerInput, TaskUncheckedCreateWithoutCleanerInput>
  }

  export type TaskCreateManyCleanerInputEnvelope = {
    data: TaskCreateManyCleanerInput | TaskCreateManyCleanerInput[]
    skipDuplicates?: boolean
  }

  export type ShiftEntriesCreateWithoutUserInput = {
    userName: string
    shiftStart: string
    shiftEnd?: string | null
    hoursWorkd?: string | null
  }

  export type ShiftEntriesUncheckedCreateWithoutUserInput = {
    id?: number
    userName: string
    shiftStart: string
    shiftEnd?: string | null
    hoursWorkd?: string | null
  }

  export type ShiftEntriesCreateOrConnectWithoutUserInput = {
    where: ShiftEntriesWhereUniqueInput
    create: XOR<ShiftEntriesCreateWithoutUserInput, ShiftEntriesUncheckedCreateWithoutUserInput>
  }

  export type ShiftEntriesCreateManyUserInputEnvelope = {
    data: ShiftEntriesCreateManyUserInput | ShiftEntriesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type savedMessagesCreateWithoutUserInput = {
    message: string
  }

  export type savedMessagesUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
  }

  export type savedMessagesCreateOrConnectWithoutUserInput = {
    where: savedMessagesWhereUniqueInput
    create: XOR<savedMessagesCreateWithoutUserInput, savedMessagesUncheckedCreateWithoutUserInput>
  }

  export type savedMessagesCreateManyUserInputEnvelope = {
    data: savedMessagesCreateManyUserInput | savedMessagesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutCleanerInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCleanerInput, TaskUncheckedUpdateWithoutCleanerInput>
    create: XOR<TaskCreateWithoutCleanerInput, TaskUncheckedCreateWithoutCleanerInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCleanerInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCleanerInput, TaskUncheckedUpdateWithoutCleanerInput>
  }

  export type TaskUpdateManyWithWhereWithoutCleanerInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCleanerInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    taskId?: IntFilter<"Task"> | number
    chaletNom?: StringNullableFilter<"Task"> | string | null
    cleanerId?: IntNullableFilter<"Task"> | number | null
    chaletId?: IntNullableFilter<"Task"> | number | null
    startTime?: StringNullableFilter<"Task"> | string | null
    endTime?: StringNullableFilter<"Task"> | string | null
    totalTime?: StringNullableFilter<"Task"> | string | null
    completed?: BoolFilter<"Task"> | boolean
  }

  export type ShiftEntriesUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftEntriesWhereUniqueInput
    update: XOR<ShiftEntriesUpdateWithoutUserInput, ShiftEntriesUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftEntriesCreateWithoutUserInput, ShiftEntriesUncheckedCreateWithoutUserInput>
  }

  export type ShiftEntriesUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftEntriesWhereUniqueInput
    data: XOR<ShiftEntriesUpdateWithoutUserInput, ShiftEntriesUncheckedUpdateWithoutUserInput>
  }

  export type ShiftEntriesUpdateManyWithWhereWithoutUserInput = {
    where: ShiftEntriesScalarWhereInput
    data: XOR<ShiftEntriesUpdateManyMutationInput, ShiftEntriesUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftEntriesScalarWhereInput = {
    AND?: ShiftEntriesScalarWhereInput | ShiftEntriesScalarWhereInput[]
    OR?: ShiftEntriesScalarWhereInput[]
    NOT?: ShiftEntriesScalarWhereInput | ShiftEntriesScalarWhereInput[]
    id?: IntFilter<"ShiftEntries"> | number
    userName?: StringFilter<"ShiftEntries"> | string
    userId?: IntFilter<"ShiftEntries"> | number
    shiftStart?: StringFilter<"ShiftEntries"> | string
    shiftEnd?: StringNullableFilter<"ShiftEntries"> | string | null
    hoursWorkd?: StringNullableFilter<"ShiftEntries"> | string | null
  }

  export type savedMessagesUpsertWithWhereUniqueWithoutUserInput = {
    where: savedMessagesWhereUniqueInput
    update: XOR<savedMessagesUpdateWithoutUserInput, savedMessagesUncheckedUpdateWithoutUserInput>
    create: XOR<savedMessagesCreateWithoutUserInput, savedMessagesUncheckedCreateWithoutUserInput>
  }

  export type savedMessagesUpdateWithWhereUniqueWithoutUserInput = {
    where: savedMessagesWhereUniqueInput
    data: XOR<savedMessagesUpdateWithoutUserInput, savedMessagesUncheckedUpdateWithoutUserInput>
  }

  export type savedMessagesUpdateManyWithWhereWithoutUserInput = {
    where: savedMessagesScalarWhereInput
    data: XOR<savedMessagesUpdateManyMutationInput, savedMessagesUncheckedUpdateManyWithoutUserInput>
  }

  export type savedMessagesScalarWhereInput = {
    AND?: savedMessagesScalarWhereInput | savedMessagesScalarWhereInput[]
    OR?: savedMessagesScalarWhereInput[]
    NOT?: savedMessagesScalarWhereInput | savedMessagesScalarWhereInput[]
    id?: IntFilter<"savedMessages"> | number
    message?: StringFilter<"savedMessages"> | string
    userId?: IntFilter<"savedMessages"> | number
  }

  export type UserCreateWithoutShiftsInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    tasks?: TaskCreateNestedManyWithoutCleanerInput
    messages?: savedMessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShiftsInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCleanerInput
    messages?: savedMessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
  }

  export type UserUpsertWithoutShiftsInput = {
    update: XOR<UserUpdateWithoutShiftsInput, UserUncheckedUpdateWithoutShiftsInput>
    create: XOR<UserCreateWithoutShiftsInput, UserUncheckedCreateWithoutShiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShiftsInput, UserUncheckedUpdateWithoutShiftsInput>
  }

  export type UserUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutCleanerNestedInput
    messages?: savedMessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCleanerNestedInput
    messages?: savedMessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateWithoutChaletInput = {
    chaletNom?: string | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
    cleaner?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutChaletInput = {
    taskId?: number
    chaletNom?: string | null
    cleanerId?: number | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
  }

  export type TaskCreateOrConnectWithoutChaletInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutChaletInput, TaskUncheckedCreateWithoutChaletInput>
  }

  export type TaskCreateManyChaletInputEnvelope = {
    data: TaskCreateManyChaletInput | TaskCreateManyChaletInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutChaletInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutChaletInput, TaskUncheckedUpdateWithoutChaletInput>
    create: XOR<TaskCreateWithoutChaletInput, TaskUncheckedCreateWithoutChaletInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutChaletInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutChaletInput, TaskUncheckedUpdateWithoutChaletInput>
  }

  export type TaskUpdateManyWithWhereWithoutChaletInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutChaletInput>
  }

  export type UserCreateWithoutTasksInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    shifts?: ShiftEntriesCreateNestedManyWithoutUserInput
    messages?: savedMessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    shifts?: ShiftEntriesUncheckedCreateNestedManyWithoutUserInput
    messages?: savedMessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type ChaletCreateWithoutTasksInput = {
    chaletNom: string
    cleanState?: boolean
    workingOn?: boolean
  }

  export type ChaletUncheckedCreateWithoutTasksInput = {
    chaletId?: number
    chaletNom: string
    cleanState?: boolean
    workingOn?: boolean
  }

  export type ChaletCreateOrConnectWithoutTasksInput = {
    where: ChaletWhereUniqueInput
    create: XOR<ChaletCreateWithoutTasksInput, ChaletUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    shifts?: ShiftEntriesUpdateManyWithoutUserNestedInput
    messages?: savedMessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    shifts?: ShiftEntriesUncheckedUpdateManyWithoutUserNestedInput
    messages?: savedMessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChaletUpsertWithoutTasksInput = {
    update: XOR<ChaletUpdateWithoutTasksInput, ChaletUncheckedUpdateWithoutTasksInput>
    create: XOR<ChaletCreateWithoutTasksInput, ChaletUncheckedCreateWithoutTasksInput>
    where?: ChaletWhereInput
  }

  export type ChaletUpdateToOneWithWhereWithoutTasksInput = {
    where?: ChaletWhereInput
    data: XOR<ChaletUpdateWithoutTasksInput, ChaletUncheckedUpdateWithoutTasksInput>
  }

  export type ChaletUpdateWithoutTasksInput = {
    chaletNom?: StringFieldUpdateOperationsInput | string
    cleanState?: BoolFieldUpdateOperationsInput | boolean
    workingOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChaletUncheckedUpdateWithoutTasksInput = {
    chaletId?: IntFieldUpdateOperationsInput | number
    chaletNom?: StringFieldUpdateOperationsInput | string
    cleanState?: BoolFieldUpdateOperationsInput | boolean
    workingOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutMessagesInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    tasks?: TaskCreateNestedManyWithoutCleanerInput
    shifts?: ShiftEntriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id: number
    name: string
    avatar?: string | null
    loggedIn?: boolean
    password: string
    usrAuthTokn: string
    tasks?: TaskUncheckedCreateNestedManyWithoutCleanerInput
    shifts?: ShiftEntriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutCleanerNestedInput
    shifts?: ShiftEntriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loggedIn?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    usrAuthTokn?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutCleanerNestedInput
    shifts?: ShiftEntriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyCleanerInput = {
    taskId?: number
    chaletNom?: string | null
    chaletId?: number | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
  }

  export type ShiftEntriesCreateManyUserInput = {
    id?: number
    userName: string
    shiftStart: string
    shiftEnd?: string | null
    hoursWorkd?: string | null
  }

  export type savedMessagesCreateManyUserInput = {
    id?: number
    message: string
  }

  export type TaskUpdateWithoutCleanerInput = {
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    chalet?: ChaletUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCleanerInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    chaletId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyWithoutCleanerInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    chaletId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftEntriesUpdateWithoutUserInput = {
    userName?: StringFieldUpdateOperationsInput | string
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftEntriesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftEntriesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorkd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type savedMessagesUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type savedMessagesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type savedMessagesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyChaletInput = {
    taskId?: number
    chaletNom?: string | null
    cleanerId?: number | null
    startTime?: string | null
    endTime?: string | null
    totalTime?: string | null
    completed?: boolean
  }

  export type TaskUpdateWithoutChaletInput = {
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    cleaner?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutChaletInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyWithoutChaletInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    chaletNom?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalTime?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChaletCountOutputTypeDefaultArgs instead
     */
    export type ChaletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChaletCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftEntriesDefaultArgs instead
     */
    export type ShiftEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftEntriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChaletDefaultArgs instead
     */
    export type ChaletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChaletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use savedMessagesDefaultArgs instead
     */
    export type savedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = savedMessagesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}