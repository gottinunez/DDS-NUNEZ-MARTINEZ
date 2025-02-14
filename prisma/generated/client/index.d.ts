
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Notificacion
 * 
 */
export type Notificacion = $Result.DefaultSelection<Prisma.$NotificacionPayload>
/**
 * Model Mercaderia
 * 
 */
export type Mercaderia = $Result.DefaultSelection<Prisma.$MercaderiaPayload>
/**
 * Model Mayorista
 * 
 */
export type Mayorista = $Result.DefaultSelection<Prisma.$MayoristaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notificacions
 * const notificacions = await prisma.notificacion.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Notificacions
   * const notificacions = await prisma.notificacion.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.notificacion`: Exposes CRUD operations for the **Notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.NotificacionDelegate<ExtArgs>;

  /**
   * `prisma.mercaderia`: Exposes CRUD operations for the **Mercaderia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mercaderias
    * const mercaderias = await prisma.mercaderia.findMany()
    * ```
    */
  get mercaderia(): Prisma.MercaderiaDelegate<ExtArgs>;

  /**
   * `prisma.mayorista`: Exposes CRUD operations for the **Mayorista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mayoristas
    * const mayoristas = await prisma.mayorista.findMany()
    * ```
    */
  get mayorista(): Prisma.MayoristaDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Notificacion: 'Notificacion',
    Mercaderia: 'Mercaderia',
    Mayorista: 'Mayorista'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "notificacion" | "mercaderia" | "mayorista"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notificacion: {
        payload: Prisma.$NotificacionPayload<ExtArgs>
        fields: Prisma.NotificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findFirst: {
            args: Prisma.NotificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          findMany: {
            args: Prisma.NotificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          create: {
            args: Prisma.NotificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          createMany: {
            args: Prisma.NotificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>[]
          }
          delete: {
            args: Prisma.NotificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          update: {
            args: Prisma.NotificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          deleteMany: {
            args: Prisma.NotificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.NotificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
          }
        }
      }
      Mercaderia: {
        payload: Prisma.$MercaderiaPayload<ExtArgs>
        fields: Prisma.MercaderiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MercaderiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MercaderiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>
          }
          findFirst: {
            args: Prisma.MercaderiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MercaderiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>
          }
          findMany: {
            args: Prisma.MercaderiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>[]
          }
          create: {
            args: Prisma.MercaderiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>
          }
          createMany: {
            args: Prisma.MercaderiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MercaderiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>[]
          }
          delete: {
            args: Prisma.MercaderiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>
          }
          update: {
            args: Prisma.MercaderiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>
          }
          deleteMany: {
            args: Prisma.MercaderiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MercaderiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MercaderiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercaderiaPayload>
          }
          aggregate: {
            args: Prisma.MercaderiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMercaderia>
          }
          groupBy: {
            args: Prisma.MercaderiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MercaderiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MercaderiaCountArgs<ExtArgs>
            result: $Utils.Optional<MercaderiaCountAggregateOutputType> | number
          }
        }
      }
      Mayorista: {
        payload: Prisma.$MayoristaPayload<ExtArgs>
        fields: Prisma.MayoristaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MayoristaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MayoristaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>
          }
          findFirst: {
            args: Prisma.MayoristaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MayoristaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>
          }
          findMany: {
            args: Prisma.MayoristaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>[]
          }
          create: {
            args: Prisma.MayoristaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>
          }
          createMany: {
            args: Prisma.MayoristaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MayoristaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>[]
          }
          delete: {
            args: Prisma.MayoristaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>
          }
          update: {
            args: Prisma.MayoristaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>
          }
          deleteMany: {
            args: Prisma.MayoristaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MayoristaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MayoristaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MayoristaPayload>
          }
          aggregate: {
            args: Prisma.MayoristaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMayorista>
          }
          groupBy: {
            args: Prisma.MayoristaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MayoristaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MayoristaCountArgs<ExtArgs>
            result: $Utils.Optional<MayoristaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Models
   */

  /**
   * Model Notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificacionSumAggregateOutputType = {
    id: number | null
  }

  export type NotificacionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    mensaje: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    isSent: boolean | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    mensaje: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    isSent: boolean | null
  }

  export type NotificacionCountAggregateOutputType = {
    id: number
    titulo: number
    mensaje: number
    scheduledAt: number
    createdAt: number
    isSent: number
    _all: number
  }


  export type NotificacionAvgAggregateInputType = {
    id?: true
  }

  export type NotificacionSumAggregateInputType = {
    id?: true
  }

  export type NotificacionMinAggregateInputType = {
    id?: true
    titulo?: true
    mensaje?: true
    scheduledAt?: true
    createdAt?: true
    isSent?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id?: true
    titulo?: true
    mensaje?: true
    scheduledAt?: true
    createdAt?: true
    isSent?: true
  }

  export type NotificacionCountAggregateInputType = {
    id?: true
    titulo?: true
    mensaje?: true
    scheduledAt?: true
    createdAt?: true
    isSent?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacion to aggregate.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type NotificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacionWhereInput
    orderBy?: NotificacionOrderByWithAggregationInput | NotificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: NotificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _avg?: NotificacionAvgAggregateInputType
    _sum?: NotificacionSumAggregateInputType
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id: number
    titulo: string
    mensaje: string
    scheduledAt: Date
    createdAt: Date
    isSent: boolean
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends NotificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type NotificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    isSent?: boolean
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    isSent?: boolean
  }, ExtArgs["result"]["notificacion"]>

  export type NotificacionSelectScalar = {
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    isSent?: boolean
  }


  export type $NotificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      mensaje: string
      scheduledAt: Date
      createdAt: Date
      isSent: boolean
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type NotificacionGetPayload<S extends boolean | null | undefined | NotificacionDefaultArgs> = $Result.GetResult<Prisma.$NotificacionPayload, S>

  type NotificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificacionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface NotificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacion'], meta: { name: 'Notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {NotificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacionFindUniqueArgs>(args: SelectSubset<T, NotificacionFindUniqueArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacionFindFirstArgs>(args?: SelectSubset<T, NotificacionFindFirstArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacionFindManyArgs>(args?: SelectSubset<T, NotificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notificacion.
     * @param {NotificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends NotificacionCreateArgs>(args: SelectSubset<T, NotificacionCreateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notificacions.
     * @param {NotificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacionCreateManyArgs>(args?: SelectSubset<T, NotificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacions and returns the data saved in the database.
     * @param {NotificacionCreateManyAndReturnArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacions and only return the `id`
     * const notificacionWithIdOnly = await prisma.notificacion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notificacion.
     * @param {NotificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends NotificacionDeleteArgs>(args: SelectSubset<T, NotificacionDeleteArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notificacion.
     * @param {NotificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacionUpdateArgs>(args: SelectSubset<T, NotificacionUpdateArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notificacions.
     * @param {NotificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacionDeleteManyArgs>(args?: SelectSubset<T, NotificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacionUpdateManyArgs>(args: SelectSubset<T, NotificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacion.
     * @param {NotificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends NotificacionUpsertArgs>(args: SelectSubset<T, NotificacionUpsertArgs<ExtArgs>>): Prisma__NotificacionClient<$Result.GetResult<Prisma.$NotificacionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends NotificacionCountArgs>(
      args?: Subset<T, NotificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionGroupByArgs} args - Group by arguments.
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
      T extends NotificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacionGroupByArgs['orderBy'] }
        : { orderBy?: NotificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacion model
   */
  readonly fields: NotificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacion model
   */ 
  interface NotificacionFieldRefs {
    readonly id: FieldRef<"Notificacion", 'Int'>
    readonly titulo: FieldRef<"Notificacion", 'String'>
    readonly mensaje: FieldRef<"Notificacion", 'String'>
    readonly scheduledAt: FieldRef<"Notificacion", 'DateTime'>
    readonly createdAt: FieldRef<"Notificacion", 'DateTime'>
    readonly isSent: FieldRef<"Notificacion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notificacion findUnique
   */
  export type NotificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findUniqueOrThrow
   */
  export type NotificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion findFirst
   */
  export type NotificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findFirstOrThrow
   */
  export type NotificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Filter, which Notificacion to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion findMany
   */
  export type NotificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Filter, which Notificacions to fetch.
     */
    where?: NotificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacions to fetch.
     */
    orderBy?: NotificacionOrderByWithRelationInput | NotificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacions.
     */
    cursor?: NotificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * Notificacion create
   */
  export type NotificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * The data needed to create a Notificacion.
     */
    data: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
  }

  /**
   * Notificacion createMany
   */
  export type NotificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
  }

  /**
   * Notificacion createManyAndReturn
   */
  export type NotificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notificacions.
     */
    data: NotificacionCreateManyInput | NotificacionCreateManyInput[]
  }

  /**
   * Notificacion update
   */
  export type NotificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * The data needed to update a Notificacion.
     */
    data: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
    /**
     * Choose, which Notificacion to update.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion updateMany
   */
  export type NotificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacions.
     */
    data: XOR<NotificacionUpdateManyMutationInput, NotificacionUncheckedUpdateManyInput>
    /**
     * Filter which Notificacions to update
     */
    where?: NotificacionWhereInput
  }

  /**
   * Notificacion upsert
   */
  export type NotificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * The filter to search for the Notificacion to update in case it exists.
     */
    where: NotificacionWhereUniqueInput
    /**
     * In case the Notificacion found by the `where` argument doesn't exist, create a new Notificacion with this data.
     */
    create: XOR<NotificacionCreateInput, NotificacionUncheckedCreateInput>
    /**
     * In case the Notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacionUpdateInput, NotificacionUncheckedUpdateInput>
  }

  /**
   * Notificacion delete
   */
  export type NotificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
    /**
     * Filter which Notificacion to delete.
     */
    where: NotificacionWhereUniqueInput
  }

  /**
   * Notificacion deleteMany
   */
  export type NotificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacions to delete
     */
    where?: NotificacionWhereInput
  }

  /**
   * Notificacion without action
   */
  export type NotificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacion
     */
    select?: NotificacionSelect<ExtArgs> | null
  }


  /**
   * Model Mercaderia
   */

  export type AggregateMercaderia = {
    _count: MercaderiaCountAggregateOutputType | null
    _avg: MercaderiaAvgAggregateOutputType | null
    _sum: MercaderiaSumAggregateOutputType | null
    _min: MercaderiaMinAggregateOutputType | null
    _max: MercaderiaMaxAggregateOutputType | null
  }

  export type MercaderiaAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stockDisponible: number | null
  }

  export type MercaderiaSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stockDisponible: number | null
  }

  export type MercaderiaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    marca: string | null
    stockDisponible: number | null
  }

  export type MercaderiaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    marca: string | null
    stockDisponible: number | null
  }

  export type MercaderiaCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    marca: number
    stockDisponible: number
    _all: number
  }


  export type MercaderiaAvgAggregateInputType = {
    id?: true
    precio?: true
    stockDisponible?: true
  }

  export type MercaderiaSumAggregateInputType = {
    id?: true
    precio?: true
    stockDisponible?: true
  }

  export type MercaderiaMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    marca?: true
    stockDisponible?: true
  }

  export type MercaderiaMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    marca?: true
    stockDisponible?: true
  }

  export type MercaderiaCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    marca?: true
    stockDisponible?: true
    _all?: true
  }

  export type MercaderiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mercaderia to aggregate.
     */
    where?: MercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercaderias to fetch.
     */
    orderBy?: MercaderiaOrderByWithRelationInput | MercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mercaderias
    **/
    _count?: true | MercaderiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MercaderiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MercaderiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MercaderiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MercaderiaMaxAggregateInputType
  }

  export type GetMercaderiaAggregateType<T extends MercaderiaAggregateArgs> = {
        [P in keyof T & keyof AggregateMercaderia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMercaderia[P]>
      : GetScalarType<T[P], AggregateMercaderia[P]>
  }




  export type MercaderiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MercaderiaWhereInput
    orderBy?: MercaderiaOrderByWithAggregationInput | MercaderiaOrderByWithAggregationInput[]
    by: MercaderiaScalarFieldEnum[] | MercaderiaScalarFieldEnum
    having?: MercaderiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MercaderiaCountAggregateInputType | true
    _avg?: MercaderiaAvgAggregateInputType
    _sum?: MercaderiaSumAggregateInputType
    _min?: MercaderiaMinAggregateInputType
    _max?: MercaderiaMaxAggregateInputType
  }

  export type MercaderiaGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    marca: string
    stockDisponible: number
    _count: MercaderiaCountAggregateOutputType | null
    _avg: MercaderiaAvgAggregateOutputType | null
    _sum: MercaderiaSumAggregateOutputType | null
    _min: MercaderiaMinAggregateOutputType | null
    _max: MercaderiaMaxAggregateOutputType | null
  }

  type GetMercaderiaGroupByPayload<T extends MercaderiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MercaderiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MercaderiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MercaderiaGroupByOutputType[P]>
            : GetScalarType<T[P], MercaderiaGroupByOutputType[P]>
        }
      >
    >


  export type MercaderiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    marca?: boolean
    stockDisponible?: boolean
  }, ExtArgs["result"]["mercaderia"]>

  export type MercaderiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    marca?: boolean
    stockDisponible?: boolean
  }, ExtArgs["result"]["mercaderia"]>

  export type MercaderiaSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    marca?: boolean
    stockDisponible?: boolean
  }


  export type $MercaderiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mercaderia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      marca: string
      stockDisponible: number
    }, ExtArgs["result"]["mercaderia"]>
    composites: {}
  }

  type MercaderiaGetPayload<S extends boolean | null | undefined | MercaderiaDefaultArgs> = $Result.GetResult<Prisma.$MercaderiaPayload, S>

  type MercaderiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MercaderiaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MercaderiaCountAggregateInputType | true
    }

  export interface MercaderiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mercaderia'], meta: { name: 'Mercaderia' } }
    /**
     * Find zero or one Mercaderia that matches the filter.
     * @param {MercaderiaFindUniqueArgs} args - Arguments to find a Mercaderia
     * @example
     * // Get one Mercaderia
     * const mercaderia = await prisma.mercaderia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MercaderiaFindUniqueArgs>(args: SelectSubset<T, MercaderiaFindUniqueArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mercaderia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MercaderiaFindUniqueOrThrowArgs} args - Arguments to find a Mercaderia
     * @example
     * // Get one Mercaderia
     * const mercaderia = await prisma.mercaderia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MercaderiaFindUniqueOrThrowArgs>(args: SelectSubset<T, MercaderiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mercaderia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaFindFirstArgs} args - Arguments to find a Mercaderia
     * @example
     * // Get one Mercaderia
     * const mercaderia = await prisma.mercaderia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MercaderiaFindFirstArgs>(args?: SelectSubset<T, MercaderiaFindFirstArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mercaderia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaFindFirstOrThrowArgs} args - Arguments to find a Mercaderia
     * @example
     * // Get one Mercaderia
     * const mercaderia = await prisma.mercaderia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MercaderiaFindFirstOrThrowArgs>(args?: SelectSubset<T, MercaderiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mercaderias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mercaderias
     * const mercaderias = await prisma.mercaderia.findMany()
     * 
     * // Get first 10 Mercaderias
     * const mercaderias = await prisma.mercaderia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mercaderiaWithIdOnly = await prisma.mercaderia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MercaderiaFindManyArgs>(args?: SelectSubset<T, MercaderiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mercaderia.
     * @param {MercaderiaCreateArgs} args - Arguments to create a Mercaderia.
     * @example
     * // Create one Mercaderia
     * const Mercaderia = await prisma.mercaderia.create({
     *   data: {
     *     // ... data to create a Mercaderia
     *   }
     * })
     * 
     */
    create<T extends MercaderiaCreateArgs>(args: SelectSubset<T, MercaderiaCreateArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mercaderias.
     * @param {MercaderiaCreateManyArgs} args - Arguments to create many Mercaderias.
     * @example
     * // Create many Mercaderias
     * const mercaderia = await prisma.mercaderia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MercaderiaCreateManyArgs>(args?: SelectSubset<T, MercaderiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mercaderias and returns the data saved in the database.
     * @param {MercaderiaCreateManyAndReturnArgs} args - Arguments to create many Mercaderias.
     * @example
     * // Create many Mercaderias
     * const mercaderia = await prisma.mercaderia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mercaderias and only return the `id`
     * const mercaderiaWithIdOnly = await prisma.mercaderia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MercaderiaCreateManyAndReturnArgs>(args?: SelectSubset<T, MercaderiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mercaderia.
     * @param {MercaderiaDeleteArgs} args - Arguments to delete one Mercaderia.
     * @example
     * // Delete one Mercaderia
     * const Mercaderia = await prisma.mercaderia.delete({
     *   where: {
     *     // ... filter to delete one Mercaderia
     *   }
     * })
     * 
     */
    delete<T extends MercaderiaDeleteArgs>(args: SelectSubset<T, MercaderiaDeleteArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mercaderia.
     * @param {MercaderiaUpdateArgs} args - Arguments to update one Mercaderia.
     * @example
     * // Update one Mercaderia
     * const mercaderia = await prisma.mercaderia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MercaderiaUpdateArgs>(args: SelectSubset<T, MercaderiaUpdateArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mercaderias.
     * @param {MercaderiaDeleteManyArgs} args - Arguments to filter Mercaderias to delete.
     * @example
     * // Delete a few Mercaderias
     * const { count } = await prisma.mercaderia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MercaderiaDeleteManyArgs>(args?: SelectSubset<T, MercaderiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mercaderias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mercaderias
     * const mercaderia = await prisma.mercaderia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MercaderiaUpdateManyArgs>(args: SelectSubset<T, MercaderiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mercaderia.
     * @param {MercaderiaUpsertArgs} args - Arguments to update or create a Mercaderia.
     * @example
     * // Update or create a Mercaderia
     * const mercaderia = await prisma.mercaderia.upsert({
     *   create: {
     *     // ... data to create a Mercaderia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mercaderia we want to update
     *   }
     * })
     */
    upsert<T extends MercaderiaUpsertArgs>(args: SelectSubset<T, MercaderiaUpsertArgs<ExtArgs>>): Prisma__MercaderiaClient<$Result.GetResult<Prisma.$MercaderiaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mercaderias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaCountArgs} args - Arguments to filter Mercaderias to count.
     * @example
     * // Count the number of Mercaderias
     * const count = await prisma.mercaderia.count({
     *   where: {
     *     // ... the filter for the Mercaderias we want to count
     *   }
     * })
    **/
    count<T extends MercaderiaCountArgs>(
      args?: Subset<T, MercaderiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MercaderiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mercaderia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MercaderiaAggregateArgs>(args: Subset<T, MercaderiaAggregateArgs>): Prisma.PrismaPromise<GetMercaderiaAggregateType<T>>

    /**
     * Group by Mercaderia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercaderiaGroupByArgs} args - Group by arguments.
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
      T extends MercaderiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MercaderiaGroupByArgs['orderBy'] }
        : { orderBy?: MercaderiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MercaderiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMercaderiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mercaderia model
   */
  readonly fields: MercaderiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mercaderia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MercaderiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mercaderia model
   */ 
  interface MercaderiaFieldRefs {
    readonly id: FieldRef<"Mercaderia", 'Int'>
    readonly nombre: FieldRef<"Mercaderia", 'String'>
    readonly precio: FieldRef<"Mercaderia", 'Float'>
    readonly marca: FieldRef<"Mercaderia", 'String'>
    readonly stockDisponible: FieldRef<"Mercaderia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mercaderia findUnique
   */
  export type MercaderiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * Filter, which Mercaderia to fetch.
     */
    where: MercaderiaWhereUniqueInput
  }

  /**
   * Mercaderia findUniqueOrThrow
   */
  export type MercaderiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * Filter, which Mercaderia to fetch.
     */
    where: MercaderiaWhereUniqueInput
  }

  /**
   * Mercaderia findFirst
   */
  export type MercaderiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * Filter, which Mercaderia to fetch.
     */
    where?: MercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercaderias to fetch.
     */
    orderBy?: MercaderiaOrderByWithRelationInput | MercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mercaderias.
     */
    cursor?: MercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mercaderias.
     */
    distinct?: MercaderiaScalarFieldEnum | MercaderiaScalarFieldEnum[]
  }

  /**
   * Mercaderia findFirstOrThrow
   */
  export type MercaderiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * Filter, which Mercaderia to fetch.
     */
    where?: MercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercaderias to fetch.
     */
    orderBy?: MercaderiaOrderByWithRelationInput | MercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mercaderias.
     */
    cursor?: MercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mercaderias.
     */
    distinct?: MercaderiaScalarFieldEnum | MercaderiaScalarFieldEnum[]
  }

  /**
   * Mercaderia findMany
   */
  export type MercaderiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * Filter, which Mercaderias to fetch.
     */
    where?: MercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercaderias to fetch.
     */
    orderBy?: MercaderiaOrderByWithRelationInput | MercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mercaderias.
     */
    cursor?: MercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercaderias.
     */
    skip?: number
    distinct?: MercaderiaScalarFieldEnum | MercaderiaScalarFieldEnum[]
  }

  /**
   * Mercaderia create
   */
  export type MercaderiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * The data needed to create a Mercaderia.
     */
    data: XOR<MercaderiaCreateInput, MercaderiaUncheckedCreateInput>
  }

  /**
   * Mercaderia createMany
   */
  export type MercaderiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mercaderias.
     */
    data: MercaderiaCreateManyInput | MercaderiaCreateManyInput[]
  }

  /**
   * Mercaderia createManyAndReturn
   */
  export type MercaderiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Mercaderias.
     */
    data: MercaderiaCreateManyInput | MercaderiaCreateManyInput[]
  }

  /**
   * Mercaderia update
   */
  export type MercaderiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * The data needed to update a Mercaderia.
     */
    data: XOR<MercaderiaUpdateInput, MercaderiaUncheckedUpdateInput>
    /**
     * Choose, which Mercaderia to update.
     */
    where: MercaderiaWhereUniqueInput
  }

  /**
   * Mercaderia updateMany
   */
  export type MercaderiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mercaderias.
     */
    data: XOR<MercaderiaUpdateManyMutationInput, MercaderiaUncheckedUpdateManyInput>
    /**
     * Filter which Mercaderias to update
     */
    where?: MercaderiaWhereInput
  }

  /**
   * Mercaderia upsert
   */
  export type MercaderiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * The filter to search for the Mercaderia to update in case it exists.
     */
    where: MercaderiaWhereUniqueInput
    /**
     * In case the Mercaderia found by the `where` argument doesn't exist, create a new Mercaderia with this data.
     */
    create: XOR<MercaderiaCreateInput, MercaderiaUncheckedCreateInput>
    /**
     * In case the Mercaderia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MercaderiaUpdateInput, MercaderiaUncheckedUpdateInput>
  }

  /**
   * Mercaderia delete
   */
  export type MercaderiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
    /**
     * Filter which Mercaderia to delete.
     */
    where: MercaderiaWhereUniqueInput
  }

  /**
   * Mercaderia deleteMany
   */
  export type MercaderiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mercaderias to delete
     */
    where?: MercaderiaWhereInput
  }

  /**
   * Mercaderia without action
   */
  export type MercaderiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercaderia
     */
    select?: MercaderiaSelect<ExtArgs> | null
  }


  /**
   * Model Mayorista
   */

  export type AggregateMayorista = {
    _count: MayoristaCountAggregateOutputType | null
    _avg: MayoristaAvgAggregateOutputType | null
    _sum: MayoristaSumAggregateOutputType | null
    _min: MayoristaMinAggregateOutputType | null
    _max: MayoristaMaxAggregateOutputType | null
  }

  export type MayoristaAvgAggregateOutputType = {
    id: number | null
  }

  export type MayoristaSumAggregateOutputType = {
    id: number | null
  }

  export type MayoristaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    pagina_web: string | null
    ubicacion: string | null
  }

  export type MayoristaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    pagina_web: string | null
    ubicacion: string | null
  }

  export type MayoristaCountAggregateOutputType = {
    id: number
    nombre: number
    pagina_web: number
    ubicacion: number
    _all: number
  }


  export type MayoristaAvgAggregateInputType = {
    id?: true
  }

  export type MayoristaSumAggregateInputType = {
    id?: true
  }

  export type MayoristaMinAggregateInputType = {
    id?: true
    nombre?: true
    pagina_web?: true
    ubicacion?: true
  }

  export type MayoristaMaxAggregateInputType = {
    id?: true
    nombre?: true
    pagina_web?: true
    ubicacion?: true
  }

  export type MayoristaCountAggregateInputType = {
    id?: true
    nombre?: true
    pagina_web?: true
    ubicacion?: true
    _all?: true
  }

  export type MayoristaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mayorista to aggregate.
     */
    where?: MayoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mayoristas to fetch.
     */
    orderBy?: MayoristaOrderByWithRelationInput | MayoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MayoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mayoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mayoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mayoristas
    **/
    _count?: true | MayoristaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MayoristaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MayoristaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MayoristaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MayoristaMaxAggregateInputType
  }

  export type GetMayoristaAggregateType<T extends MayoristaAggregateArgs> = {
        [P in keyof T & keyof AggregateMayorista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMayorista[P]>
      : GetScalarType<T[P], AggregateMayorista[P]>
  }




  export type MayoristaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MayoristaWhereInput
    orderBy?: MayoristaOrderByWithAggregationInput | MayoristaOrderByWithAggregationInput[]
    by: MayoristaScalarFieldEnum[] | MayoristaScalarFieldEnum
    having?: MayoristaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MayoristaCountAggregateInputType | true
    _avg?: MayoristaAvgAggregateInputType
    _sum?: MayoristaSumAggregateInputType
    _min?: MayoristaMinAggregateInputType
    _max?: MayoristaMaxAggregateInputType
  }

  export type MayoristaGroupByOutputType = {
    id: number
    nombre: string
    pagina_web: string
    ubicacion: string
    _count: MayoristaCountAggregateOutputType | null
    _avg: MayoristaAvgAggregateOutputType | null
    _sum: MayoristaSumAggregateOutputType | null
    _min: MayoristaMinAggregateOutputType | null
    _max: MayoristaMaxAggregateOutputType | null
  }

  type GetMayoristaGroupByPayload<T extends MayoristaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MayoristaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MayoristaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MayoristaGroupByOutputType[P]>
            : GetScalarType<T[P], MayoristaGroupByOutputType[P]>
        }
      >
    >


  export type MayoristaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    pagina_web?: boolean
    ubicacion?: boolean
  }, ExtArgs["result"]["mayorista"]>

  export type MayoristaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    pagina_web?: boolean
    ubicacion?: boolean
  }, ExtArgs["result"]["mayorista"]>

  export type MayoristaSelectScalar = {
    id?: boolean
    nombre?: boolean
    pagina_web?: boolean
    ubicacion?: boolean
  }


  export type $MayoristaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mayorista"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      pagina_web: string
      ubicacion: string
    }, ExtArgs["result"]["mayorista"]>
    composites: {}
  }

  type MayoristaGetPayload<S extends boolean | null | undefined | MayoristaDefaultArgs> = $Result.GetResult<Prisma.$MayoristaPayload, S>

  type MayoristaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MayoristaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MayoristaCountAggregateInputType | true
    }

  export interface MayoristaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mayorista'], meta: { name: 'Mayorista' } }
    /**
     * Find zero or one Mayorista that matches the filter.
     * @param {MayoristaFindUniqueArgs} args - Arguments to find a Mayorista
     * @example
     * // Get one Mayorista
     * const mayorista = await prisma.mayorista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MayoristaFindUniqueArgs>(args: SelectSubset<T, MayoristaFindUniqueArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mayorista that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MayoristaFindUniqueOrThrowArgs} args - Arguments to find a Mayorista
     * @example
     * // Get one Mayorista
     * const mayorista = await prisma.mayorista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MayoristaFindUniqueOrThrowArgs>(args: SelectSubset<T, MayoristaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mayorista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaFindFirstArgs} args - Arguments to find a Mayorista
     * @example
     * // Get one Mayorista
     * const mayorista = await prisma.mayorista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MayoristaFindFirstArgs>(args?: SelectSubset<T, MayoristaFindFirstArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mayorista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaFindFirstOrThrowArgs} args - Arguments to find a Mayorista
     * @example
     * // Get one Mayorista
     * const mayorista = await prisma.mayorista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MayoristaFindFirstOrThrowArgs>(args?: SelectSubset<T, MayoristaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mayoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mayoristas
     * const mayoristas = await prisma.mayorista.findMany()
     * 
     * // Get first 10 Mayoristas
     * const mayoristas = await prisma.mayorista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mayoristaWithIdOnly = await prisma.mayorista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MayoristaFindManyArgs>(args?: SelectSubset<T, MayoristaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mayorista.
     * @param {MayoristaCreateArgs} args - Arguments to create a Mayorista.
     * @example
     * // Create one Mayorista
     * const Mayorista = await prisma.mayorista.create({
     *   data: {
     *     // ... data to create a Mayorista
     *   }
     * })
     * 
     */
    create<T extends MayoristaCreateArgs>(args: SelectSubset<T, MayoristaCreateArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mayoristas.
     * @param {MayoristaCreateManyArgs} args - Arguments to create many Mayoristas.
     * @example
     * // Create many Mayoristas
     * const mayorista = await prisma.mayorista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MayoristaCreateManyArgs>(args?: SelectSubset<T, MayoristaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mayoristas and returns the data saved in the database.
     * @param {MayoristaCreateManyAndReturnArgs} args - Arguments to create many Mayoristas.
     * @example
     * // Create many Mayoristas
     * const mayorista = await prisma.mayorista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mayoristas and only return the `id`
     * const mayoristaWithIdOnly = await prisma.mayorista.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MayoristaCreateManyAndReturnArgs>(args?: SelectSubset<T, MayoristaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mayorista.
     * @param {MayoristaDeleteArgs} args - Arguments to delete one Mayorista.
     * @example
     * // Delete one Mayorista
     * const Mayorista = await prisma.mayorista.delete({
     *   where: {
     *     // ... filter to delete one Mayorista
     *   }
     * })
     * 
     */
    delete<T extends MayoristaDeleteArgs>(args: SelectSubset<T, MayoristaDeleteArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mayorista.
     * @param {MayoristaUpdateArgs} args - Arguments to update one Mayorista.
     * @example
     * // Update one Mayorista
     * const mayorista = await prisma.mayorista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MayoristaUpdateArgs>(args: SelectSubset<T, MayoristaUpdateArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mayoristas.
     * @param {MayoristaDeleteManyArgs} args - Arguments to filter Mayoristas to delete.
     * @example
     * // Delete a few Mayoristas
     * const { count } = await prisma.mayorista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MayoristaDeleteManyArgs>(args?: SelectSubset<T, MayoristaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mayoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mayoristas
     * const mayorista = await prisma.mayorista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MayoristaUpdateManyArgs>(args: SelectSubset<T, MayoristaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mayorista.
     * @param {MayoristaUpsertArgs} args - Arguments to update or create a Mayorista.
     * @example
     * // Update or create a Mayorista
     * const mayorista = await prisma.mayorista.upsert({
     *   create: {
     *     // ... data to create a Mayorista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mayorista we want to update
     *   }
     * })
     */
    upsert<T extends MayoristaUpsertArgs>(args: SelectSubset<T, MayoristaUpsertArgs<ExtArgs>>): Prisma__MayoristaClient<$Result.GetResult<Prisma.$MayoristaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mayoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaCountArgs} args - Arguments to filter Mayoristas to count.
     * @example
     * // Count the number of Mayoristas
     * const count = await prisma.mayorista.count({
     *   where: {
     *     // ... the filter for the Mayoristas we want to count
     *   }
     * })
    **/
    count<T extends MayoristaCountArgs>(
      args?: Subset<T, MayoristaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MayoristaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mayorista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MayoristaAggregateArgs>(args: Subset<T, MayoristaAggregateArgs>): Prisma.PrismaPromise<GetMayoristaAggregateType<T>>

    /**
     * Group by Mayorista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MayoristaGroupByArgs} args - Group by arguments.
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
      T extends MayoristaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MayoristaGroupByArgs['orderBy'] }
        : { orderBy?: MayoristaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MayoristaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMayoristaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mayorista model
   */
  readonly fields: MayoristaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mayorista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MayoristaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mayorista model
   */ 
  interface MayoristaFieldRefs {
    readonly id: FieldRef<"Mayorista", 'Int'>
    readonly nombre: FieldRef<"Mayorista", 'String'>
    readonly pagina_web: FieldRef<"Mayorista", 'String'>
    readonly ubicacion: FieldRef<"Mayorista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mayorista findUnique
   */
  export type MayoristaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * Filter, which Mayorista to fetch.
     */
    where: MayoristaWhereUniqueInput
  }

  /**
   * Mayorista findUniqueOrThrow
   */
  export type MayoristaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * Filter, which Mayorista to fetch.
     */
    where: MayoristaWhereUniqueInput
  }

  /**
   * Mayorista findFirst
   */
  export type MayoristaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * Filter, which Mayorista to fetch.
     */
    where?: MayoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mayoristas to fetch.
     */
    orderBy?: MayoristaOrderByWithRelationInput | MayoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mayoristas.
     */
    cursor?: MayoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mayoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mayoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mayoristas.
     */
    distinct?: MayoristaScalarFieldEnum | MayoristaScalarFieldEnum[]
  }

  /**
   * Mayorista findFirstOrThrow
   */
  export type MayoristaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * Filter, which Mayorista to fetch.
     */
    where?: MayoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mayoristas to fetch.
     */
    orderBy?: MayoristaOrderByWithRelationInput | MayoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mayoristas.
     */
    cursor?: MayoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mayoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mayoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mayoristas.
     */
    distinct?: MayoristaScalarFieldEnum | MayoristaScalarFieldEnum[]
  }

  /**
   * Mayorista findMany
   */
  export type MayoristaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * Filter, which Mayoristas to fetch.
     */
    where?: MayoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mayoristas to fetch.
     */
    orderBy?: MayoristaOrderByWithRelationInput | MayoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mayoristas.
     */
    cursor?: MayoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mayoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mayoristas.
     */
    skip?: number
    distinct?: MayoristaScalarFieldEnum | MayoristaScalarFieldEnum[]
  }

  /**
   * Mayorista create
   */
  export type MayoristaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * The data needed to create a Mayorista.
     */
    data: XOR<MayoristaCreateInput, MayoristaUncheckedCreateInput>
  }

  /**
   * Mayorista createMany
   */
  export type MayoristaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mayoristas.
     */
    data: MayoristaCreateManyInput | MayoristaCreateManyInput[]
  }

  /**
   * Mayorista createManyAndReturn
   */
  export type MayoristaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Mayoristas.
     */
    data: MayoristaCreateManyInput | MayoristaCreateManyInput[]
  }

  /**
   * Mayorista update
   */
  export type MayoristaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * The data needed to update a Mayorista.
     */
    data: XOR<MayoristaUpdateInput, MayoristaUncheckedUpdateInput>
    /**
     * Choose, which Mayorista to update.
     */
    where: MayoristaWhereUniqueInput
  }

  /**
   * Mayorista updateMany
   */
  export type MayoristaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mayoristas.
     */
    data: XOR<MayoristaUpdateManyMutationInput, MayoristaUncheckedUpdateManyInput>
    /**
     * Filter which Mayoristas to update
     */
    where?: MayoristaWhereInput
  }

  /**
   * Mayorista upsert
   */
  export type MayoristaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * The filter to search for the Mayorista to update in case it exists.
     */
    where: MayoristaWhereUniqueInput
    /**
     * In case the Mayorista found by the `where` argument doesn't exist, create a new Mayorista with this data.
     */
    create: XOR<MayoristaCreateInput, MayoristaUncheckedCreateInput>
    /**
     * In case the Mayorista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MayoristaUpdateInput, MayoristaUncheckedUpdateInput>
  }

  /**
   * Mayorista delete
   */
  export type MayoristaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
    /**
     * Filter which Mayorista to delete.
     */
    where: MayoristaWhereUniqueInput
  }

  /**
   * Mayorista deleteMany
   */
  export type MayoristaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mayoristas to delete
     */
    where?: MayoristaWhereInput
  }

  /**
   * Mayorista without action
   */
  export type MayoristaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mayorista
     */
    select?: MayoristaSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NotificacionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    mensaje: 'mensaje',
    scheduledAt: 'scheduledAt',
    createdAt: 'createdAt',
    isSent: 'isSent'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


  export const MercaderiaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    marca: 'marca',
    stockDisponible: 'stockDisponible'
  };

  export type MercaderiaScalarFieldEnum = (typeof MercaderiaScalarFieldEnum)[keyof typeof MercaderiaScalarFieldEnum]


  export const MayoristaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    pagina_web: 'pagina_web',
    ubicacion: 'ubicacion'
  };

  export type MayoristaScalarFieldEnum = (typeof MayoristaScalarFieldEnum)[keyof typeof MayoristaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NotificacionWhereInput = {
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    id?: IntFilter<"Notificacion"> | number
    titulo?: StringFilter<"Notificacion"> | string
    mensaje?: StringFilter<"Notificacion"> | string
    scheduledAt?: DateTimeFilter<"Notificacion"> | Date | string
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    isSent?: BoolFilter<"Notificacion"> | boolean
  }

  export type NotificacionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    isSent?: SortOrder
  }

  export type NotificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacionWhereInput | NotificacionWhereInput[]
    OR?: NotificacionWhereInput[]
    NOT?: NotificacionWhereInput | NotificacionWhereInput[]
    titulo?: StringFilter<"Notificacion"> | string
    mensaje?: StringFilter<"Notificacion"> | string
    scheduledAt?: DateTimeFilter<"Notificacion"> | Date | string
    createdAt?: DateTimeFilter<"Notificacion"> | Date | string
    isSent?: BoolFilter<"Notificacion"> | boolean
  }, "id">

  export type NotificacionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    isSent?: SortOrder
    _count?: NotificacionCountOrderByAggregateInput
    _avg?: NotificacionAvgOrderByAggregateInput
    _max?: NotificacionMaxOrderByAggregateInput
    _min?: NotificacionMinOrderByAggregateInput
    _sum?: NotificacionSumOrderByAggregateInput
  }

  export type NotificacionScalarWhereWithAggregatesInput = {
    AND?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    OR?: NotificacionScalarWhereWithAggregatesInput[]
    NOT?: NotificacionScalarWhereWithAggregatesInput | NotificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacion"> | number
    titulo?: StringWithAggregatesFilter<"Notificacion"> | string
    mensaje?: StringWithAggregatesFilter<"Notificacion"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"Notificacion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Notificacion"> | Date | string
    isSent?: BoolWithAggregatesFilter<"Notificacion"> | boolean
  }

  export type MercaderiaWhereInput = {
    AND?: MercaderiaWhereInput | MercaderiaWhereInput[]
    OR?: MercaderiaWhereInput[]
    NOT?: MercaderiaWhereInput | MercaderiaWhereInput[]
    id?: IntFilter<"Mercaderia"> | number
    nombre?: StringFilter<"Mercaderia"> | string
    precio?: FloatFilter<"Mercaderia"> | number
    marca?: StringFilter<"Mercaderia"> | string
    stockDisponible?: IntFilter<"Mercaderia"> | number
  }

  export type MercaderiaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    marca?: SortOrder
    stockDisponible?: SortOrder
  }

  export type MercaderiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MercaderiaWhereInput | MercaderiaWhereInput[]
    OR?: MercaderiaWhereInput[]
    NOT?: MercaderiaWhereInput | MercaderiaWhereInput[]
    nombre?: StringFilter<"Mercaderia"> | string
    precio?: FloatFilter<"Mercaderia"> | number
    marca?: StringFilter<"Mercaderia"> | string
    stockDisponible?: IntFilter<"Mercaderia"> | number
  }, "id">

  export type MercaderiaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    marca?: SortOrder
    stockDisponible?: SortOrder
    _count?: MercaderiaCountOrderByAggregateInput
    _avg?: MercaderiaAvgOrderByAggregateInput
    _max?: MercaderiaMaxOrderByAggregateInput
    _min?: MercaderiaMinOrderByAggregateInput
    _sum?: MercaderiaSumOrderByAggregateInput
  }

  export type MercaderiaScalarWhereWithAggregatesInput = {
    AND?: MercaderiaScalarWhereWithAggregatesInput | MercaderiaScalarWhereWithAggregatesInput[]
    OR?: MercaderiaScalarWhereWithAggregatesInput[]
    NOT?: MercaderiaScalarWhereWithAggregatesInput | MercaderiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mercaderia"> | number
    nombre?: StringWithAggregatesFilter<"Mercaderia"> | string
    precio?: FloatWithAggregatesFilter<"Mercaderia"> | number
    marca?: StringWithAggregatesFilter<"Mercaderia"> | string
    stockDisponible?: IntWithAggregatesFilter<"Mercaderia"> | number
  }

  export type MayoristaWhereInput = {
    AND?: MayoristaWhereInput | MayoristaWhereInput[]
    OR?: MayoristaWhereInput[]
    NOT?: MayoristaWhereInput | MayoristaWhereInput[]
    id?: IntFilter<"Mayorista"> | number
    nombre?: StringFilter<"Mayorista"> | string
    pagina_web?: StringFilter<"Mayorista"> | string
    ubicacion?: StringFilter<"Mayorista"> | string
  }

  export type MayoristaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    pagina_web?: SortOrder
    ubicacion?: SortOrder
  }

  export type MayoristaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MayoristaWhereInput | MayoristaWhereInput[]
    OR?: MayoristaWhereInput[]
    NOT?: MayoristaWhereInput | MayoristaWhereInput[]
    nombre?: StringFilter<"Mayorista"> | string
    pagina_web?: StringFilter<"Mayorista"> | string
    ubicacion?: StringFilter<"Mayorista"> | string
  }, "id">

  export type MayoristaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    pagina_web?: SortOrder
    ubicacion?: SortOrder
    _count?: MayoristaCountOrderByAggregateInput
    _avg?: MayoristaAvgOrderByAggregateInput
    _max?: MayoristaMaxOrderByAggregateInput
    _min?: MayoristaMinOrderByAggregateInput
    _sum?: MayoristaSumOrderByAggregateInput
  }

  export type MayoristaScalarWhereWithAggregatesInput = {
    AND?: MayoristaScalarWhereWithAggregatesInput | MayoristaScalarWhereWithAggregatesInput[]
    OR?: MayoristaScalarWhereWithAggregatesInput[]
    NOT?: MayoristaScalarWhereWithAggregatesInput | MayoristaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mayorista"> | number
    nombre?: StringWithAggregatesFilter<"Mayorista"> | string
    pagina_web?: StringWithAggregatesFilter<"Mayorista"> | string
    ubicacion?: StringWithAggregatesFilter<"Mayorista"> | string
  }

  export type NotificacionCreateInput = {
    titulo: string
    mensaje: string
    scheduledAt: Date | string
    createdAt?: Date | string
    isSent?: boolean
  }

  export type NotificacionUncheckedCreateInput = {
    id?: number
    titulo: string
    mensaje: string
    scheduledAt: Date | string
    createdAt?: Date | string
    isSent?: boolean
  }

  export type NotificacionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificacionCreateManyInput = {
    id?: number
    titulo: string
    mensaje: string
    scheduledAt: Date | string
    createdAt?: Date | string
    isSent?: boolean
  }

  export type NotificacionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MercaderiaCreateInput = {
    nombre: string
    precio: number
    marca: string
    stockDisponible: number
  }

  export type MercaderiaUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    marca: string
    stockDisponible: number
  }

  export type MercaderiaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    stockDisponible?: IntFieldUpdateOperationsInput | number
  }

  export type MercaderiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    stockDisponible?: IntFieldUpdateOperationsInput | number
  }

  export type MercaderiaCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    marca: string
    stockDisponible: number
  }

  export type MercaderiaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    stockDisponible?: IntFieldUpdateOperationsInput | number
  }

  export type MercaderiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    stockDisponible?: IntFieldUpdateOperationsInput | number
  }

  export type MayoristaCreateInput = {
    nombre: string
    pagina_web: string
    ubicacion: string
  }

  export type MayoristaUncheckedCreateInput = {
    id?: number
    nombre: string
    pagina_web: string
    ubicacion: string
  }

  export type MayoristaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pagina_web?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type MayoristaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pagina_web?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type MayoristaCreateManyInput = {
    id?: number
    nombre: string
    pagina_web: string
    ubicacion: string
  }

  export type MayoristaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pagina_web?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type MayoristaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pagina_web?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificacionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    isSent?: SortOrder
  }

  export type NotificacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    isSent?: SortOrder
  }

  export type NotificacionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    isSent?: SortOrder
  }

  export type NotificacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MercaderiaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    marca?: SortOrder
    stockDisponible?: SortOrder
  }

  export type MercaderiaAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stockDisponible?: SortOrder
  }

  export type MercaderiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    marca?: SortOrder
    stockDisponible?: SortOrder
  }

  export type MercaderiaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    marca?: SortOrder
    stockDisponible?: SortOrder
  }

  export type MercaderiaSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stockDisponible?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MayoristaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    pagina_web?: SortOrder
    ubicacion?: SortOrder
  }

  export type MayoristaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MayoristaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    pagina_web?: SortOrder
    ubicacion?: SortOrder
  }

  export type MayoristaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    pagina_web?: SortOrder
    ubicacion?: SortOrder
  }

  export type MayoristaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



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