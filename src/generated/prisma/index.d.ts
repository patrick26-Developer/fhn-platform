
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
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Enfant
 * 
 */
export type Enfant = $Result.DefaultSelection<Prisma.$EnfantPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  parent: 'parent',
  secretaire: 'secretaire',
  analyste: 'analyste',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutDossier: {
  Nouveau: 'Nouveau',
  EnCours: 'EnCours',
  Incomplet: 'Incomplet',
  Accepte: 'Accepte',
  Rejete: 'Rejete',
  Cloture: 'Cloture'
};

export type StatutDossier = (typeof StatutDossier)[keyof typeof StatutDossier]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutDossier = $Enums.StatutDossier

export const StatutDossier: typeof $Enums.StatutDossier

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enfant`: Exposes CRUD operations for the **Enfant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enfants
    * const enfants = await prisma.enfant.findMany()
    * ```
    */
  get enfant(): Prisma.EnfantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Utilisateur: 'Utilisateur',
    Enfant: 'Enfant',
    Document: 'Document',
    Commentaire: 'Commentaire'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "enfant" | "document" | "commentaire"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Enfant: {
        payload: Prisma.$EnfantPayload<ExtArgs>
        fields: Prisma.EnfantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnfantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnfantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>
          }
          findFirst: {
            args: Prisma.EnfantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnfantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>
          }
          findMany: {
            args: Prisma.EnfantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>[]
          }
          create: {
            args: Prisma.EnfantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>
          }
          createMany: {
            args: Prisma.EnfantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnfantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>[]
          }
          delete: {
            args: Prisma.EnfantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>
          }
          update: {
            args: Prisma.EnfantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>
          }
          deleteMany: {
            args: Prisma.EnfantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnfantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnfantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>[]
          }
          upsert: {
            args: Prisma.EnfantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnfantPayload>
          }
          aggregate: {
            args: Prisma.EnfantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnfant>
          }
          groupBy: {
            args: Prisma.EnfantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnfantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnfantCountArgs<ExtArgs>
            result: $Utils.Optional<EnfantCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    enfant?: EnfantOmit
    document?: DocumentOmit
    commentaire?: CommentaireOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    enfants: number
    commentaires: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enfants?: boolean | UtilisateurCountOutputTypeCountEnfantsArgs
    commentaires?: boolean | UtilisateurCountOutputTypeCountCommentairesArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountEnfantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnfantWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }


  /**
   * Count Type EnfantCountOutputType
   */

  export type EnfantCountOutputType = {
    documents: number
    observations: number
  }

  export type EnfantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | EnfantCountOutputTypeCountDocumentsArgs
    observations?: boolean | EnfantCountOutputTypeCountObservationsArgs
  }

  // Custom InputTypes
  /**
   * EnfantCountOutputType without action
   */
  export type EnfantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnfantCountOutputType
     */
    select?: EnfantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnfantCountOutputType without action
   */
  export type EnfantCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * EnfantCountOutputType without action
   */
  export type EnfantCountOutputTypeCountObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    nom: string | null
    email: string | null
    motDePasse: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    email: string | null
    motDePasse: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    motDePasse: number
    role: number
    createdAt: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    motDePasse?: true
    role?: true
    createdAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    motDePasse?: true
    role?: true
    createdAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    motDePasse?: true
    role?: true
    createdAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt: Date
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    role?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    enfants?: boolean | Utilisateur$enfantsArgs<ExtArgs>
    commentaires?: boolean | Utilisateur$commentairesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    role?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    role?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    role?: boolean
    createdAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "motDePasse" | "role" | "createdAt" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enfants?: boolean | Utilisateur$enfantsArgs<ExtArgs>
    commentaires?: boolean | Utilisateur$commentairesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      enfants: Prisma.$EnfantPayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      email: string
      motDePasse: string
      role: $Enums.Role
      createdAt: Date
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enfants<T extends Utilisateur$enfantsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$enfantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends Utilisateur$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasse: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
    readonly resetToken: FieldRef<"Utilisateur", 'String'>
    readonly resetTokenExpiry: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.enfants
   */
  export type Utilisateur$enfantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    where?: EnfantWhereInput
    orderBy?: EnfantOrderByWithRelationInput | EnfantOrderByWithRelationInput[]
    cursor?: EnfantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnfantScalarFieldEnum | EnfantScalarFieldEnum[]
  }

  /**
   * Utilisateur.commentaires
   */
  export type Utilisateur$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Enfant
   */

  export type AggregateEnfant = {
    _count: EnfantCountAggregateOutputType | null
    _min: EnfantMinAggregateOutputType | null
    _max: EnfantMaxAggregateOutputType | null
  }

  export type EnfantMinAggregateOutputType = {
    id: string | null
    nom: string | null
    dateNaissance: Date | null
    sexe: string | null
    commune: string | null
    parentNom: string | null
    parentTelephone: string | null
    parentEmail: string | null
    statutDossier: $Enums.StatutDossier | null
    diagnostic: string | null
    dateCreation: Date | null
    utilisateurCreateurId: string | null
  }

  export type EnfantMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    dateNaissance: Date | null
    sexe: string | null
    commune: string | null
    parentNom: string | null
    parentTelephone: string | null
    parentEmail: string | null
    statutDossier: $Enums.StatutDossier | null
    diagnostic: string | null
    dateCreation: Date | null
    utilisateurCreateurId: string | null
  }

  export type EnfantCountAggregateOutputType = {
    id: number
    nom: number
    dateNaissance: number
    sexe: number
    commune: number
    parentNom: number
    parentTelephone: number
    parentEmail: number
    statutDossier: number
    diagnostic: number
    dateCreation: number
    utilisateurCreateurId: number
    _all: number
  }


  export type EnfantMinAggregateInputType = {
    id?: true
    nom?: true
    dateNaissance?: true
    sexe?: true
    commune?: true
    parentNom?: true
    parentTelephone?: true
    parentEmail?: true
    statutDossier?: true
    diagnostic?: true
    dateCreation?: true
    utilisateurCreateurId?: true
  }

  export type EnfantMaxAggregateInputType = {
    id?: true
    nom?: true
    dateNaissance?: true
    sexe?: true
    commune?: true
    parentNom?: true
    parentTelephone?: true
    parentEmail?: true
    statutDossier?: true
    diagnostic?: true
    dateCreation?: true
    utilisateurCreateurId?: true
  }

  export type EnfantCountAggregateInputType = {
    id?: true
    nom?: true
    dateNaissance?: true
    sexe?: true
    commune?: true
    parentNom?: true
    parentTelephone?: true
    parentEmail?: true
    statutDossier?: true
    diagnostic?: true
    dateCreation?: true
    utilisateurCreateurId?: true
    _all?: true
  }

  export type EnfantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enfant to aggregate.
     */
    where?: EnfantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enfants to fetch.
     */
    orderBy?: EnfantOrderByWithRelationInput | EnfantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnfantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enfants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enfants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enfants
    **/
    _count?: true | EnfantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnfantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnfantMaxAggregateInputType
  }

  export type GetEnfantAggregateType<T extends EnfantAggregateArgs> = {
        [P in keyof T & keyof AggregateEnfant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnfant[P]>
      : GetScalarType<T[P], AggregateEnfant[P]>
  }




  export type EnfantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnfantWhereInput
    orderBy?: EnfantOrderByWithAggregationInput | EnfantOrderByWithAggregationInput[]
    by: EnfantScalarFieldEnum[] | EnfantScalarFieldEnum
    having?: EnfantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnfantCountAggregateInputType | true
    _min?: EnfantMinAggregateInputType
    _max?: EnfantMaxAggregateInputType
  }

  export type EnfantGroupByOutputType = {
    id: string
    nom: string
    dateNaissance: Date
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier: $Enums.StatutDossier
    diagnostic: string | null
    dateCreation: Date
    utilisateurCreateurId: string
    _count: EnfantCountAggregateOutputType | null
    _min: EnfantMinAggregateOutputType | null
    _max: EnfantMaxAggregateOutputType | null
  }

  type GetEnfantGroupByPayload<T extends EnfantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnfantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnfantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnfantGroupByOutputType[P]>
            : GetScalarType<T[P], EnfantGroupByOutputType[P]>
        }
      >
    >


  export type EnfantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    dateNaissance?: boolean
    sexe?: boolean
    commune?: boolean
    parentNom?: boolean
    parentTelephone?: boolean
    parentEmail?: boolean
    statutDossier?: boolean
    diagnostic?: boolean
    dateCreation?: boolean
    utilisateurCreateurId?: boolean
    utilisateurCreateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    documents?: boolean | Enfant$documentsArgs<ExtArgs>
    observations?: boolean | Enfant$observationsArgs<ExtArgs>
    _count?: boolean | EnfantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enfant"]>

  export type EnfantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    dateNaissance?: boolean
    sexe?: boolean
    commune?: boolean
    parentNom?: boolean
    parentTelephone?: boolean
    parentEmail?: boolean
    statutDossier?: boolean
    diagnostic?: boolean
    dateCreation?: boolean
    utilisateurCreateurId?: boolean
    utilisateurCreateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enfant"]>

  export type EnfantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    dateNaissance?: boolean
    sexe?: boolean
    commune?: boolean
    parentNom?: boolean
    parentTelephone?: boolean
    parentEmail?: boolean
    statutDossier?: boolean
    diagnostic?: boolean
    dateCreation?: boolean
    utilisateurCreateurId?: boolean
    utilisateurCreateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enfant"]>

  export type EnfantSelectScalar = {
    id?: boolean
    nom?: boolean
    dateNaissance?: boolean
    sexe?: boolean
    commune?: boolean
    parentNom?: boolean
    parentTelephone?: boolean
    parentEmail?: boolean
    statutDossier?: boolean
    diagnostic?: boolean
    dateCreation?: boolean
    utilisateurCreateurId?: boolean
  }

  export type EnfantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "dateNaissance" | "sexe" | "commune" | "parentNom" | "parentTelephone" | "parentEmail" | "statutDossier" | "diagnostic" | "dateCreation" | "utilisateurCreateurId", ExtArgs["result"]["enfant"]>
  export type EnfantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurCreateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    documents?: boolean | Enfant$documentsArgs<ExtArgs>
    observations?: boolean | Enfant$observationsArgs<ExtArgs>
    _count?: boolean | EnfantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnfantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurCreateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type EnfantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurCreateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $EnfantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enfant"
    objects: {
      utilisateurCreateur: Prisma.$UtilisateurPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      observations: Prisma.$CommentairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      dateNaissance: Date
      sexe: string
      commune: string
      parentNom: string
      parentTelephone: string
      parentEmail: string
      statutDossier: $Enums.StatutDossier
      diagnostic: string | null
      dateCreation: Date
      utilisateurCreateurId: string
    }, ExtArgs["result"]["enfant"]>
    composites: {}
  }

  type EnfantGetPayload<S extends boolean | null | undefined | EnfantDefaultArgs> = $Result.GetResult<Prisma.$EnfantPayload, S>

  type EnfantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnfantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnfantCountAggregateInputType | true
    }

  export interface EnfantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enfant'], meta: { name: 'Enfant' } }
    /**
     * Find zero or one Enfant that matches the filter.
     * @param {EnfantFindUniqueArgs} args - Arguments to find a Enfant
     * @example
     * // Get one Enfant
     * const enfant = await prisma.enfant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnfantFindUniqueArgs>(args: SelectSubset<T, EnfantFindUniqueArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enfant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnfantFindUniqueOrThrowArgs} args - Arguments to find a Enfant
     * @example
     * // Get one Enfant
     * const enfant = await prisma.enfant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnfantFindUniqueOrThrowArgs>(args: SelectSubset<T, EnfantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enfant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantFindFirstArgs} args - Arguments to find a Enfant
     * @example
     * // Get one Enfant
     * const enfant = await prisma.enfant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnfantFindFirstArgs>(args?: SelectSubset<T, EnfantFindFirstArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enfant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantFindFirstOrThrowArgs} args - Arguments to find a Enfant
     * @example
     * // Get one Enfant
     * const enfant = await prisma.enfant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnfantFindFirstOrThrowArgs>(args?: SelectSubset<T, EnfantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enfants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enfants
     * const enfants = await prisma.enfant.findMany()
     * 
     * // Get first 10 Enfants
     * const enfants = await prisma.enfant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enfantWithIdOnly = await prisma.enfant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnfantFindManyArgs>(args?: SelectSubset<T, EnfantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enfant.
     * @param {EnfantCreateArgs} args - Arguments to create a Enfant.
     * @example
     * // Create one Enfant
     * const Enfant = await prisma.enfant.create({
     *   data: {
     *     // ... data to create a Enfant
     *   }
     * })
     * 
     */
    create<T extends EnfantCreateArgs>(args: SelectSubset<T, EnfantCreateArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enfants.
     * @param {EnfantCreateManyArgs} args - Arguments to create many Enfants.
     * @example
     * // Create many Enfants
     * const enfant = await prisma.enfant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnfantCreateManyArgs>(args?: SelectSubset<T, EnfantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enfants and returns the data saved in the database.
     * @param {EnfantCreateManyAndReturnArgs} args - Arguments to create many Enfants.
     * @example
     * // Create many Enfants
     * const enfant = await prisma.enfant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enfants and only return the `id`
     * const enfantWithIdOnly = await prisma.enfant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnfantCreateManyAndReturnArgs>(args?: SelectSubset<T, EnfantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enfant.
     * @param {EnfantDeleteArgs} args - Arguments to delete one Enfant.
     * @example
     * // Delete one Enfant
     * const Enfant = await prisma.enfant.delete({
     *   where: {
     *     // ... filter to delete one Enfant
     *   }
     * })
     * 
     */
    delete<T extends EnfantDeleteArgs>(args: SelectSubset<T, EnfantDeleteArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enfant.
     * @param {EnfantUpdateArgs} args - Arguments to update one Enfant.
     * @example
     * // Update one Enfant
     * const enfant = await prisma.enfant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnfantUpdateArgs>(args: SelectSubset<T, EnfantUpdateArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enfants.
     * @param {EnfantDeleteManyArgs} args - Arguments to filter Enfants to delete.
     * @example
     * // Delete a few Enfants
     * const { count } = await prisma.enfant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnfantDeleteManyArgs>(args?: SelectSubset<T, EnfantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enfants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enfants
     * const enfant = await prisma.enfant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnfantUpdateManyArgs>(args: SelectSubset<T, EnfantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enfants and returns the data updated in the database.
     * @param {EnfantUpdateManyAndReturnArgs} args - Arguments to update many Enfants.
     * @example
     * // Update many Enfants
     * const enfant = await prisma.enfant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enfants and only return the `id`
     * const enfantWithIdOnly = await prisma.enfant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnfantUpdateManyAndReturnArgs>(args: SelectSubset<T, EnfantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enfant.
     * @param {EnfantUpsertArgs} args - Arguments to update or create a Enfant.
     * @example
     * // Update or create a Enfant
     * const enfant = await prisma.enfant.upsert({
     *   create: {
     *     // ... data to create a Enfant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enfant we want to update
     *   }
     * })
     */
    upsert<T extends EnfantUpsertArgs>(args: SelectSubset<T, EnfantUpsertArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enfants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantCountArgs} args - Arguments to filter Enfants to count.
     * @example
     * // Count the number of Enfants
     * const count = await prisma.enfant.count({
     *   where: {
     *     // ... the filter for the Enfants we want to count
     *   }
     * })
    **/
    count<T extends EnfantCountArgs>(
      args?: Subset<T, EnfantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnfantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enfant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnfantAggregateArgs>(args: Subset<T, EnfantAggregateArgs>): Prisma.PrismaPromise<GetEnfantAggregateType<T>>

    /**
     * Group by Enfant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfantGroupByArgs} args - Group by arguments.
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
      T extends EnfantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnfantGroupByArgs['orderBy'] }
        : { orderBy?: EnfantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnfantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnfantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enfant model
   */
  readonly fields: EnfantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enfant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnfantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateurCreateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Enfant$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Enfant$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    observations<T extends Enfant$observationsArgs<ExtArgs> = {}>(args?: Subset<T, Enfant$observationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Enfant model
   */
  interface EnfantFieldRefs {
    readonly id: FieldRef<"Enfant", 'String'>
    readonly nom: FieldRef<"Enfant", 'String'>
    readonly dateNaissance: FieldRef<"Enfant", 'DateTime'>
    readonly sexe: FieldRef<"Enfant", 'String'>
    readonly commune: FieldRef<"Enfant", 'String'>
    readonly parentNom: FieldRef<"Enfant", 'String'>
    readonly parentTelephone: FieldRef<"Enfant", 'String'>
    readonly parentEmail: FieldRef<"Enfant", 'String'>
    readonly statutDossier: FieldRef<"Enfant", 'StatutDossier'>
    readonly diagnostic: FieldRef<"Enfant", 'String'>
    readonly dateCreation: FieldRef<"Enfant", 'DateTime'>
    readonly utilisateurCreateurId: FieldRef<"Enfant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Enfant findUnique
   */
  export type EnfantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * Filter, which Enfant to fetch.
     */
    where: EnfantWhereUniqueInput
  }

  /**
   * Enfant findUniqueOrThrow
   */
  export type EnfantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * Filter, which Enfant to fetch.
     */
    where: EnfantWhereUniqueInput
  }

  /**
   * Enfant findFirst
   */
  export type EnfantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * Filter, which Enfant to fetch.
     */
    where?: EnfantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enfants to fetch.
     */
    orderBy?: EnfantOrderByWithRelationInput | EnfantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enfants.
     */
    cursor?: EnfantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enfants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enfants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enfants.
     */
    distinct?: EnfantScalarFieldEnum | EnfantScalarFieldEnum[]
  }

  /**
   * Enfant findFirstOrThrow
   */
  export type EnfantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * Filter, which Enfant to fetch.
     */
    where?: EnfantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enfants to fetch.
     */
    orderBy?: EnfantOrderByWithRelationInput | EnfantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enfants.
     */
    cursor?: EnfantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enfants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enfants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enfants.
     */
    distinct?: EnfantScalarFieldEnum | EnfantScalarFieldEnum[]
  }

  /**
   * Enfant findMany
   */
  export type EnfantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * Filter, which Enfants to fetch.
     */
    where?: EnfantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enfants to fetch.
     */
    orderBy?: EnfantOrderByWithRelationInput | EnfantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enfants.
     */
    cursor?: EnfantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enfants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enfants.
     */
    skip?: number
    distinct?: EnfantScalarFieldEnum | EnfantScalarFieldEnum[]
  }

  /**
   * Enfant create
   */
  export type EnfantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * The data needed to create a Enfant.
     */
    data: XOR<EnfantCreateInput, EnfantUncheckedCreateInput>
  }

  /**
   * Enfant createMany
   */
  export type EnfantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enfants.
     */
    data: EnfantCreateManyInput | EnfantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enfant createManyAndReturn
   */
  export type EnfantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * The data used to create many Enfants.
     */
    data: EnfantCreateManyInput | EnfantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enfant update
   */
  export type EnfantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * The data needed to update a Enfant.
     */
    data: XOR<EnfantUpdateInput, EnfantUncheckedUpdateInput>
    /**
     * Choose, which Enfant to update.
     */
    where: EnfantWhereUniqueInput
  }

  /**
   * Enfant updateMany
   */
  export type EnfantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enfants.
     */
    data: XOR<EnfantUpdateManyMutationInput, EnfantUncheckedUpdateManyInput>
    /**
     * Filter which Enfants to update
     */
    where?: EnfantWhereInput
    /**
     * Limit how many Enfants to update.
     */
    limit?: number
  }

  /**
   * Enfant updateManyAndReturn
   */
  export type EnfantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * The data used to update Enfants.
     */
    data: XOR<EnfantUpdateManyMutationInput, EnfantUncheckedUpdateManyInput>
    /**
     * Filter which Enfants to update
     */
    where?: EnfantWhereInput
    /**
     * Limit how many Enfants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enfant upsert
   */
  export type EnfantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * The filter to search for the Enfant to update in case it exists.
     */
    where: EnfantWhereUniqueInput
    /**
     * In case the Enfant found by the `where` argument doesn't exist, create a new Enfant with this data.
     */
    create: XOR<EnfantCreateInput, EnfantUncheckedCreateInput>
    /**
     * In case the Enfant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnfantUpdateInput, EnfantUncheckedUpdateInput>
  }

  /**
   * Enfant delete
   */
  export type EnfantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
    /**
     * Filter which Enfant to delete.
     */
    where: EnfantWhereUniqueInput
  }

  /**
   * Enfant deleteMany
   */
  export type EnfantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enfants to delete
     */
    where?: EnfantWhereInput
    /**
     * Limit how many Enfants to delete.
     */
    limit?: number
  }

  /**
   * Enfant.documents
   */
  export type Enfant$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Enfant.observations
   */
  export type Enfant$observationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Enfant without action
   */
  export type EnfantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enfant
     */
    select?: EnfantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enfant
     */
    omit?: EnfantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnfantInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    url: string | null
    nomFichierOriginal: string | null
    enfantId: string | null
    uploadedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    url: string | null
    nomFichierOriginal: string | null
    enfantId: string | null
    uploadedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    url: number
    nomFichierOriginal: number
    enfantId: number
    uploadedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    url?: true
    nomFichierOriginal?: true
    enfantId?: true
    uploadedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    url?: true
    nomFichierOriginal?: true
    enfantId?: true
    uploadedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    url?: true
    nomFichierOriginal?: true
    enfantId?: true
    uploadedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    url: string
    nomFichierOriginal: string
    enfantId: string
    uploadedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nomFichierOriginal?: boolean
    enfantId?: boolean
    uploadedAt?: boolean
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nomFichierOriginal?: boolean
    enfantId?: boolean
    uploadedAt?: boolean
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nomFichierOriginal?: boolean
    enfantId?: boolean
    uploadedAt?: boolean
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    url?: boolean
    nomFichierOriginal?: boolean
    enfantId?: boolean
    uploadedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "nomFichierOriginal" | "enfantId" | "uploadedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      enfant: Prisma.$EnfantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      nomFichierOriginal: string
      enfantId: string
      uploadedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enfant<T extends EnfantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnfantDefaultArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly nomFichierOriginal: FieldRef<"Document", 'String'>
    readonly enfantId: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireMinAggregateOutputType = {
    id: string | null
    contenu: string | null
    auteurId: string | null
    enfantId: string | null
    creeLe: Date | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id: string | null
    contenu: string | null
    auteurId: string | null
    enfantId: string | null
    creeLe: Date | null
  }

  export type CommentaireCountAggregateOutputType = {
    id: number
    contenu: number
    auteurId: number
    enfantId: number
    creeLe: number
    _all: number
  }


  export type CommentaireMinAggregateInputType = {
    id?: true
    contenu?: true
    auteurId?: true
    enfantId?: true
    creeLe?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id?: true
    contenu?: true
    auteurId?: true
    enfantId?: true
    creeLe?: true
  }

  export type CommentaireCountAggregateInputType = {
    id?: true
    contenu?: true
    auteurId?: true
    enfantId?: true
    creeLe?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id: string
    contenu: string
    auteurId: string
    enfantId: string
    creeLe: Date
    _count: CommentaireCountAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    auteurId?: boolean
    enfantId?: boolean
    creeLe?: boolean
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    auteurId?: boolean
    enfantId?: boolean
    creeLe?: boolean
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    auteurId?: boolean
    enfantId?: boolean
    creeLe?: boolean
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectScalar = {
    id?: boolean
    contenu?: boolean
    auteurId?: boolean
    enfantId?: boolean
    creeLe?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "auteurId" | "enfantId" | "creeLe", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    enfant?: boolean | EnfantDefaultArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      auteur: Prisma.$UtilisateurPayload<ExtArgs>
      enfant: Prisma.$EnfantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenu: string
      auteurId: string
      enfantId: string
      creeLe: Date
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentaireCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentaireCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentaireUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentaireUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
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
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enfant<T extends EnfantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnfantDefaultArgs<ExtArgs>>): Prisma__EnfantClient<$Result.GetResult<Prisma.$EnfantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id: FieldRef<"Commentaire", 'String'>
    readonly contenu: FieldRef<"Commentaire", 'String'>
    readonly auteurId: FieldRef<"Commentaire", 'String'>
    readonly enfantId: FieldRef<"Commentaire", 'String'>
    readonly creeLe: FieldRef<"Commentaire", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaire createManyAndReturn
   */
  export type CommentaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire updateManyAndReturn
   */
  export type CommentaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    motDePasse: 'motDePasse',
    role: 'role',
    createdAt: 'createdAt',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const EnfantScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    dateNaissance: 'dateNaissance',
    sexe: 'sexe',
    commune: 'commune',
    parentNom: 'parentNom',
    parentTelephone: 'parentTelephone',
    parentEmail: 'parentEmail',
    statutDossier: 'statutDossier',
    diagnostic: 'diagnostic',
    dateCreation: 'dateCreation',
    utilisateurCreateurId: 'utilisateurCreateurId'
  };

  export type EnfantScalarFieldEnum = (typeof EnfantScalarFieldEnum)[keyof typeof EnfantScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    nomFichierOriginal: 'nomFichierOriginal',
    enfantId: 'enfantId',
    uploadedAt: 'uploadedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const CommentaireScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    auteurId: 'auteurId',
    enfantId: 'enfantId',
    creeLe: 'creeLe'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatutDossier'
   */
  export type EnumStatutDossierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDossier'>
    


  /**
   * Reference to a field of type 'StatutDossier[]'
   */
  export type ListEnumStatutDossierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDossier[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    resetToken?: StringNullableFilter<"Utilisateur"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    enfants?: EnfantListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    enfants?: EnfantOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    resetToken?: StringNullableFilter<"Utilisateur"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    enfants?: EnfantListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasse?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    resetToken?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Utilisateur"> | Date | string | null
  }

  export type EnfantWhereInput = {
    AND?: EnfantWhereInput | EnfantWhereInput[]
    OR?: EnfantWhereInput[]
    NOT?: EnfantWhereInput | EnfantWhereInput[]
    id?: StringFilter<"Enfant"> | string
    nom?: StringFilter<"Enfant"> | string
    dateNaissance?: DateTimeFilter<"Enfant"> | Date | string
    sexe?: StringFilter<"Enfant"> | string
    commune?: StringFilter<"Enfant"> | string
    parentNom?: StringFilter<"Enfant"> | string
    parentTelephone?: StringFilter<"Enfant"> | string
    parentEmail?: StringFilter<"Enfant"> | string
    statutDossier?: EnumStatutDossierFilter<"Enfant"> | $Enums.StatutDossier
    diagnostic?: StringNullableFilter<"Enfant"> | string | null
    dateCreation?: DateTimeFilter<"Enfant"> | Date | string
    utilisateurCreateurId?: StringFilter<"Enfant"> | string
    utilisateurCreateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    documents?: DocumentListRelationFilter
    observations?: CommentaireListRelationFilter
  }

  export type EnfantOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    sexe?: SortOrder
    commune?: SortOrder
    parentNom?: SortOrder
    parentTelephone?: SortOrder
    parentEmail?: SortOrder
    statutDossier?: SortOrder
    diagnostic?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    utilisateurCreateurId?: SortOrder
    utilisateurCreateur?: UtilisateurOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    observations?: CommentaireOrderByRelationAggregateInput
  }

  export type EnfantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnfantWhereInput | EnfantWhereInput[]
    OR?: EnfantWhereInput[]
    NOT?: EnfantWhereInput | EnfantWhereInput[]
    nom?: StringFilter<"Enfant"> | string
    dateNaissance?: DateTimeFilter<"Enfant"> | Date | string
    sexe?: StringFilter<"Enfant"> | string
    commune?: StringFilter<"Enfant"> | string
    parentNom?: StringFilter<"Enfant"> | string
    parentTelephone?: StringFilter<"Enfant"> | string
    parentEmail?: StringFilter<"Enfant"> | string
    statutDossier?: EnumStatutDossierFilter<"Enfant"> | $Enums.StatutDossier
    diagnostic?: StringNullableFilter<"Enfant"> | string | null
    dateCreation?: DateTimeFilter<"Enfant"> | Date | string
    utilisateurCreateurId?: StringFilter<"Enfant"> | string
    utilisateurCreateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    documents?: DocumentListRelationFilter
    observations?: CommentaireListRelationFilter
  }, "id">

  export type EnfantOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    sexe?: SortOrder
    commune?: SortOrder
    parentNom?: SortOrder
    parentTelephone?: SortOrder
    parentEmail?: SortOrder
    statutDossier?: SortOrder
    diagnostic?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    utilisateurCreateurId?: SortOrder
    _count?: EnfantCountOrderByAggregateInput
    _max?: EnfantMaxOrderByAggregateInput
    _min?: EnfantMinOrderByAggregateInput
  }

  export type EnfantScalarWhereWithAggregatesInput = {
    AND?: EnfantScalarWhereWithAggregatesInput | EnfantScalarWhereWithAggregatesInput[]
    OR?: EnfantScalarWhereWithAggregatesInput[]
    NOT?: EnfantScalarWhereWithAggregatesInput | EnfantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enfant"> | string
    nom?: StringWithAggregatesFilter<"Enfant"> | string
    dateNaissance?: DateTimeWithAggregatesFilter<"Enfant"> | Date | string
    sexe?: StringWithAggregatesFilter<"Enfant"> | string
    commune?: StringWithAggregatesFilter<"Enfant"> | string
    parentNom?: StringWithAggregatesFilter<"Enfant"> | string
    parentTelephone?: StringWithAggregatesFilter<"Enfant"> | string
    parentEmail?: StringWithAggregatesFilter<"Enfant"> | string
    statutDossier?: EnumStatutDossierWithAggregatesFilter<"Enfant"> | $Enums.StatutDossier
    diagnostic?: StringNullableWithAggregatesFilter<"Enfant"> | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"Enfant"> | Date | string
    utilisateurCreateurId?: StringWithAggregatesFilter<"Enfant"> | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    nomFichierOriginal?: StringFilter<"Document"> | string
    enfantId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    enfant?: XOR<EnfantScalarRelationFilter, EnfantWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    nomFichierOriginal?: SortOrder
    enfantId?: SortOrder
    uploadedAt?: SortOrder
    enfant?: EnfantOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    url?: StringFilter<"Document"> | string
    nomFichierOriginal?: StringFilter<"Document"> | string
    enfantId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    enfant?: XOR<EnfantScalarRelationFilter, EnfantWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    nomFichierOriginal?: SortOrder
    enfantId?: SortOrder
    uploadedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    nomFichierOriginal?: StringWithAggregatesFilter<"Document"> | string
    enfantId?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id?: StringFilter<"Commentaire"> | string
    contenu?: StringFilter<"Commentaire"> | string
    auteurId?: StringFilter<"Commentaire"> | string
    enfantId?: StringFilter<"Commentaire"> | string
    creeLe?: DateTimeFilter<"Commentaire"> | Date | string
    auteur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    enfant?: XOR<EnfantScalarRelationFilter, EnfantWhereInput>
  }

  export type CommentaireOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrder
    auteurId?: SortOrder
    enfantId?: SortOrder
    creeLe?: SortOrder
    auteur?: UtilisateurOrderByWithRelationInput
    enfant?: EnfantOrderByWithRelationInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    contenu?: StringFilter<"Commentaire"> | string
    auteurId?: StringFilter<"Commentaire"> | string
    enfantId?: StringFilter<"Commentaire"> | string
    creeLe?: DateTimeFilter<"Commentaire"> | Date | string
    auteur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    enfant?: XOR<EnfantScalarRelationFilter, EnfantWhereInput>
  }, "id">

  export type CommentaireOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrder
    auteurId?: SortOrder
    enfantId?: SortOrder
    creeLe?: SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commentaire"> | string
    contenu?: StringWithAggregatesFilter<"Commentaire"> | string
    auteurId?: StringWithAggregatesFilter<"Commentaire"> | string
    enfantId?: StringWithAggregatesFilter<"Commentaire"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enfants?: EnfantCreateNestedManyWithoutUtilisateurCreateurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enfants?: EnfantUncheckedCreateNestedManyWithoutUtilisateurCreateurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enfants?: EnfantUpdateManyWithoutUtilisateurCreateurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enfants?: EnfantUncheckedUpdateManyWithoutUtilisateurCreateurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnfantCreateInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateur: UtilisateurCreateNestedOneWithoutEnfantsInput
    documents?: DocumentCreateNestedManyWithoutEnfantInput
    observations?: CommentaireCreateNestedManyWithoutEnfantInput
  }

  export type EnfantUncheckedCreateInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateurId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutEnfantInput
    observations?: CommentaireUncheckedCreateNestedManyWithoutEnfantInput
  }

  export type EnfantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateur?: UtilisateurUpdateOneRequiredWithoutEnfantsNestedInput
    documents?: DocumentUpdateManyWithoutEnfantNestedInput
    observations?: CommentaireUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateurId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutEnfantNestedInput
    observations?: CommentaireUncheckedUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantCreateManyInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateurId: string
  }

  export type EnfantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnfantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateurId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    id?: string
    url: string
    nomFichierOriginal: string
    uploadedAt?: Date | string
    enfant: EnfantCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    url: string
    nomFichierOriginal: string
    enfantId: string
    uploadedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enfant?: EnfantUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    enfantId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    url: string
    nomFichierOriginal: string
    enfantId: string
    uploadedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    enfantId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireCreateInput = {
    id?: string
    contenu: string
    creeLe?: Date | string
    auteur: UtilisateurCreateNestedOneWithoutCommentairesInput
    enfant: EnfantCreateNestedOneWithoutObservationsInput
  }

  export type CommentaireUncheckedCreateInput = {
    id?: string
    contenu: string
    auteurId: string
    enfantId: string
    creeLe?: Date | string
  }

  export type CommentaireUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UtilisateurUpdateOneRequiredWithoutCommentairesNestedInput
    enfant?: EnfantUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    auteurId?: StringFieldUpdateOperationsInput | string
    enfantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireCreateManyInput = {
    id?: string
    contenu: string
    auteurId: string
    enfantId: string
    creeLe?: Date | string
  }

  export type CommentaireUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    auteurId?: StringFieldUpdateOperationsInput | string
    enfantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnfantListRelationFilter = {
    every?: EnfantWhereInput
    some?: EnfantWhereInput
    none?: EnfantWhereInput
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnfantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatutDossierFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDossier | EnumStatutDossierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDossierFilter<$PrismaModel> | $Enums.StatutDossier
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnfantCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    sexe?: SortOrder
    commune?: SortOrder
    parentNom?: SortOrder
    parentTelephone?: SortOrder
    parentEmail?: SortOrder
    statutDossier?: SortOrder
    diagnostic?: SortOrder
    dateCreation?: SortOrder
    utilisateurCreateurId?: SortOrder
  }

  export type EnfantMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    sexe?: SortOrder
    commune?: SortOrder
    parentNom?: SortOrder
    parentTelephone?: SortOrder
    parentEmail?: SortOrder
    statutDossier?: SortOrder
    diagnostic?: SortOrder
    dateCreation?: SortOrder
    utilisateurCreateurId?: SortOrder
  }

  export type EnfantMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    sexe?: SortOrder
    commune?: SortOrder
    parentNom?: SortOrder
    parentTelephone?: SortOrder
    parentEmail?: SortOrder
    statutDossier?: SortOrder
    diagnostic?: SortOrder
    dateCreation?: SortOrder
    utilisateurCreateurId?: SortOrder
  }

  export type EnumStatutDossierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDossier | EnumStatutDossierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDossierWithAggregatesFilter<$PrismaModel> | $Enums.StatutDossier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDossierFilter<$PrismaModel>
    _max?: NestedEnumStatutDossierFilter<$PrismaModel>
  }

  export type EnfantScalarRelationFilter = {
    is?: EnfantWhereInput
    isNot?: EnfantWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nomFichierOriginal?: SortOrder
    enfantId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nomFichierOriginal?: SortOrder
    enfantId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nomFichierOriginal?: SortOrder
    enfantId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type CommentaireCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    auteurId?: SortOrder
    enfantId?: SortOrder
    creeLe?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    auteurId?: SortOrder
    enfantId?: SortOrder
    creeLe?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    auteurId?: SortOrder
    enfantId?: SortOrder
    creeLe?: SortOrder
  }

  export type EnfantCreateNestedManyWithoutUtilisateurCreateurInput = {
    create?: XOR<EnfantCreateWithoutUtilisateurCreateurInput, EnfantUncheckedCreateWithoutUtilisateurCreateurInput> | EnfantCreateWithoutUtilisateurCreateurInput[] | EnfantUncheckedCreateWithoutUtilisateurCreateurInput[]
    connectOrCreate?: EnfantCreateOrConnectWithoutUtilisateurCreateurInput | EnfantCreateOrConnectWithoutUtilisateurCreateurInput[]
    createMany?: EnfantCreateManyUtilisateurCreateurInputEnvelope
    connect?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutAuteurInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type EnfantUncheckedCreateNestedManyWithoutUtilisateurCreateurInput = {
    create?: XOR<EnfantCreateWithoutUtilisateurCreateurInput, EnfantUncheckedCreateWithoutUtilisateurCreateurInput> | EnfantCreateWithoutUtilisateurCreateurInput[] | EnfantUncheckedCreateWithoutUtilisateurCreateurInput[]
    connectOrCreate?: EnfantCreateOrConnectWithoutUtilisateurCreateurInput | EnfantCreateOrConnectWithoutUtilisateurCreateurInput[]
    createMany?: EnfantCreateManyUtilisateurCreateurInputEnvelope
    connect?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnfantUpdateManyWithoutUtilisateurCreateurNestedInput = {
    create?: XOR<EnfantCreateWithoutUtilisateurCreateurInput, EnfantUncheckedCreateWithoutUtilisateurCreateurInput> | EnfantCreateWithoutUtilisateurCreateurInput[] | EnfantUncheckedCreateWithoutUtilisateurCreateurInput[]
    connectOrCreate?: EnfantCreateOrConnectWithoutUtilisateurCreateurInput | EnfantCreateOrConnectWithoutUtilisateurCreateurInput[]
    upsert?: EnfantUpsertWithWhereUniqueWithoutUtilisateurCreateurInput | EnfantUpsertWithWhereUniqueWithoutUtilisateurCreateurInput[]
    createMany?: EnfantCreateManyUtilisateurCreateurInputEnvelope
    set?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    disconnect?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    delete?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    connect?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    update?: EnfantUpdateWithWhereUniqueWithoutUtilisateurCreateurInput | EnfantUpdateWithWhereUniqueWithoutUtilisateurCreateurInput[]
    updateMany?: EnfantUpdateManyWithWhereWithoutUtilisateurCreateurInput | EnfantUpdateManyWithWhereWithoutUtilisateurCreateurInput[]
    deleteMany?: EnfantScalarWhereInput | EnfantScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutAuteurInput | CommentaireUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutAuteurInput | CommentaireUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutAuteurInput | CommentaireUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type EnfantUncheckedUpdateManyWithoutUtilisateurCreateurNestedInput = {
    create?: XOR<EnfantCreateWithoutUtilisateurCreateurInput, EnfantUncheckedCreateWithoutUtilisateurCreateurInput> | EnfantCreateWithoutUtilisateurCreateurInput[] | EnfantUncheckedCreateWithoutUtilisateurCreateurInput[]
    connectOrCreate?: EnfantCreateOrConnectWithoutUtilisateurCreateurInput | EnfantCreateOrConnectWithoutUtilisateurCreateurInput[]
    upsert?: EnfantUpsertWithWhereUniqueWithoutUtilisateurCreateurInput | EnfantUpsertWithWhereUniqueWithoutUtilisateurCreateurInput[]
    createMany?: EnfantCreateManyUtilisateurCreateurInputEnvelope
    set?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    disconnect?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    delete?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    connect?: EnfantWhereUniqueInput | EnfantWhereUniqueInput[]
    update?: EnfantUpdateWithWhereUniqueWithoutUtilisateurCreateurInput | EnfantUpdateWithWhereUniqueWithoutUtilisateurCreateurInput[]
    updateMany?: EnfantUpdateManyWithWhereWithoutUtilisateurCreateurInput | EnfantUpdateManyWithWhereWithoutUtilisateurCreateurInput[]
    deleteMany?: EnfantScalarWhereInput | EnfantScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutAuteurInput | CommentaireUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutAuteurInput | CommentaireUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutAuteurInput | CommentaireUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutEnfantsInput = {
    create?: XOR<UtilisateurCreateWithoutEnfantsInput, UtilisateurUncheckedCreateWithoutEnfantsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEnfantsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutEnfantInput = {
    create?: XOR<DocumentCreateWithoutEnfantInput, DocumentUncheckedCreateWithoutEnfantInput> | DocumentCreateWithoutEnfantInput[] | DocumentUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEnfantInput | DocumentCreateOrConnectWithoutEnfantInput[]
    createMany?: DocumentCreateManyEnfantInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutEnfantInput = {
    create?: XOR<CommentaireCreateWithoutEnfantInput, CommentaireUncheckedCreateWithoutEnfantInput> | CommentaireCreateWithoutEnfantInput[] | CommentaireUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutEnfantInput | CommentaireCreateOrConnectWithoutEnfantInput[]
    createMany?: CommentaireCreateManyEnfantInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutEnfantInput = {
    create?: XOR<DocumentCreateWithoutEnfantInput, DocumentUncheckedCreateWithoutEnfantInput> | DocumentCreateWithoutEnfantInput[] | DocumentUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEnfantInput | DocumentCreateOrConnectWithoutEnfantInput[]
    createMany?: DocumentCreateManyEnfantInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutEnfantInput = {
    create?: XOR<CommentaireCreateWithoutEnfantInput, CommentaireUncheckedCreateWithoutEnfantInput> | CommentaireCreateWithoutEnfantInput[] | CommentaireUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutEnfantInput | CommentaireCreateOrConnectWithoutEnfantInput[]
    createMany?: CommentaireCreateManyEnfantInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type EnumStatutDossierFieldUpdateOperationsInput = {
    set?: $Enums.StatutDossier
  }

  export type UtilisateurUpdateOneRequiredWithoutEnfantsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEnfantsInput, UtilisateurUncheckedCreateWithoutEnfantsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEnfantsInput
    upsert?: UtilisateurUpsertWithoutEnfantsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutEnfantsInput, UtilisateurUpdateWithoutEnfantsInput>, UtilisateurUncheckedUpdateWithoutEnfantsInput>
  }

  export type DocumentUpdateManyWithoutEnfantNestedInput = {
    create?: XOR<DocumentCreateWithoutEnfantInput, DocumentUncheckedCreateWithoutEnfantInput> | DocumentCreateWithoutEnfantInput[] | DocumentUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEnfantInput | DocumentCreateOrConnectWithoutEnfantInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutEnfantInput | DocumentUpsertWithWhereUniqueWithoutEnfantInput[]
    createMany?: DocumentCreateManyEnfantInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutEnfantInput | DocumentUpdateWithWhereUniqueWithoutEnfantInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutEnfantInput | DocumentUpdateManyWithWhereWithoutEnfantInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutEnfantNestedInput = {
    create?: XOR<CommentaireCreateWithoutEnfantInput, CommentaireUncheckedCreateWithoutEnfantInput> | CommentaireCreateWithoutEnfantInput[] | CommentaireUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutEnfantInput | CommentaireCreateOrConnectWithoutEnfantInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutEnfantInput | CommentaireUpsertWithWhereUniqueWithoutEnfantInput[]
    createMany?: CommentaireCreateManyEnfantInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutEnfantInput | CommentaireUpdateWithWhereUniqueWithoutEnfantInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutEnfantInput | CommentaireUpdateManyWithWhereWithoutEnfantInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutEnfantNestedInput = {
    create?: XOR<DocumentCreateWithoutEnfantInput, DocumentUncheckedCreateWithoutEnfantInput> | DocumentCreateWithoutEnfantInput[] | DocumentUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutEnfantInput | DocumentCreateOrConnectWithoutEnfantInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutEnfantInput | DocumentUpsertWithWhereUniqueWithoutEnfantInput[]
    createMany?: DocumentCreateManyEnfantInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutEnfantInput | DocumentUpdateWithWhereUniqueWithoutEnfantInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutEnfantInput | DocumentUpdateManyWithWhereWithoutEnfantInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutEnfantNestedInput = {
    create?: XOR<CommentaireCreateWithoutEnfantInput, CommentaireUncheckedCreateWithoutEnfantInput> | CommentaireCreateWithoutEnfantInput[] | CommentaireUncheckedCreateWithoutEnfantInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutEnfantInput | CommentaireCreateOrConnectWithoutEnfantInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutEnfantInput | CommentaireUpsertWithWhereUniqueWithoutEnfantInput[]
    createMany?: CommentaireCreateManyEnfantInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutEnfantInput | CommentaireUpdateWithWhereUniqueWithoutEnfantInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutEnfantInput | CommentaireUpdateManyWithWhereWithoutEnfantInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type EnfantCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<EnfantCreateWithoutDocumentsInput, EnfantUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: EnfantCreateOrConnectWithoutDocumentsInput
    connect?: EnfantWhereUniqueInput
  }

  export type EnfantUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<EnfantCreateWithoutDocumentsInput, EnfantUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: EnfantCreateOrConnectWithoutDocumentsInput
    upsert?: EnfantUpsertWithoutDocumentsInput
    connect?: EnfantWhereUniqueInput
    update?: XOR<XOR<EnfantUpdateToOneWithWhereWithoutDocumentsInput, EnfantUpdateWithoutDocumentsInput>, EnfantUncheckedUpdateWithoutDocumentsInput>
  }

  export type UtilisateurCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommentairesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type EnfantCreateNestedOneWithoutObservationsInput = {
    create?: XOR<EnfantCreateWithoutObservationsInput, EnfantUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: EnfantCreateOrConnectWithoutObservationsInput
    connect?: EnfantWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommentairesInput
    upsert?: UtilisateurUpsertWithoutCommentairesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutCommentairesInput, UtilisateurUpdateWithoutCommentairesInput>, UtilisateurUncheckedUpdateWithoutCommentairesInput>
  }

  export type EnfantUpdateOneRequiredWithoutObservationsNestedInput = {
    create?: XOR<EnfantCreateWithoutObservationsInput, EnfantUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: EnfantCreateOrConnectWithoutObservationsInput
    upsert?: EnfantUpsertWithoutObservationsInput
    connect?: EnfantWhereUniqueInput
    update?: XOR<XOR<EnfantUpdateToOneWithWhereWithoutObservationsInput, EnfantUpdateWithoutObservationsInput>, EnfantUncheckedUpdateWithoutObservationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutDossierFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDossier | EnumStatutDossierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDossierFilter<$PrismaModel> | $Enums.StatutDossier
  }

  export type NestedEnumStatutDossierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDossier | EnumStatutDossierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDossier[] | ListEnumStatutDossierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDossierWithAggregatesFilter<$PrismaModel> | $Enums.StatutDossier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDossierFilter<$PrismaModel>
    _max?: NestedEnumStatutDossierFilter<$PrismaModel>
  }

  export type EnfantCreateWithoutUtilisateurCreateurInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    documents?: DocumentCreateNestedManyWithoutEnfantInput
    observations?: CommentaireCreateNestedManyWithoutEnfantInput
  }

  export type EnfantUncheckedCreateWithoutUtilisateurCreateurInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutEnfantInput
    observations?: CommentaireUncheckedCreateNestedManyWithoutEnfantInput
  }

  export type EnfantCreateOrConnectWithoutUtilisateurCreateurInput = {
    where: EnfantWhereUniqueInput
    create: XOR<EnfantCreateWithoutUtilisateurCreateurInput, EnfantUncheckedCreateWithoutUtilisateurCreateurInput>
  }

  export type EnfantCreateManyUtilisateurCreateurInputEnvelope = {
    data: EnfantCreateManyUtilisateurCreateurInput | EnfantCreateManyUtilisateurCreateurInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutAuteurInput = {
    id?: string
    contenu: string
    creeLe?: Date | string
    enfant: EnfantCreateNestedOneWithoutObservationsInput
  }

  export type CommentaireUncheckedCreateWithoutAuteurInput = {
    id?: string
    contenu: string
    enfantId: string
    creeLe?: Date | string
  }

  export type CommentaireCreateOrConnectWithoutAuteurInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput>
  }

  export type CommentaireCreateManyAuteurInputEnvelope = {
    data: CommentaireCreateManyAuteurInput | CommentaireCreateManyAuteurInput[]
    skipDuplicates?: boolean
  }

  export type EnfantUpsertWithWhereUniqueWithoutUtilisateurCreateurInput = {
    where: EnfantWhereUniqueInput
    update: XOR<EnfantUpdateWithoutUtilisateurCreateurInput, EnfantUncheckedUpdateWithoutUtilisateurCreateurInput>
    create: XOR<EnfantCreateWithoutUtilisateurCreateurInput, EnfantUncheckedCreateWithoutUtilisateurCreateurInput>
  }

  export type EnfantUpdateWithWhereUniqueWithoutUtilisateurCreateurInput = {
    where: EnfantWhereUniqueInput
    data: XOR<EnfantUpdateWithoutUtilisateurCreateurInput, EnfantUncheckedUpdateWithoutUtilisateurCreateurInput>
  }

  export type EnfantUpdateManyWithWhereWithoutUtilisateurCreateurInput = {
    where: EnfantScalarWhereInput
    data: XOR<EnfantUpdateManyMutationInput, EnfantUncheckedUpdateManyWithoutUtilisateurCreateurInput>
  }

  export type EnfantScalarWhereInput = {
    AND?: EnfantScalarWhereInput | EnfantScalarWhereInput[]
    OR?: EnfantScalarWhereInput[]
    NOT?: EnfantScalarWhereInput | EnfantScalarWhereInput[]
    id?: StringFilter<"Enfant"> | string
    nom?: StringFilter<"Enfant"> | string
    dateNaissance?: DateTimeFilter<"Enfant"> | Date | string
    sexe?: StringFilter<"Enfant"> | string
    commune?: StringFilter<"Enfant"> | string
    parentNom?: StringFilter<"Enfant"> | string
    parentTelephone?: StringFilter<"Enfant"> | string
    parentEmail?: StringFilter<"Enfant"> | string
    statutDossier?: EnumStatutDossierFilter<"Enfant"> | $Enums.StatutDossier
    diagnostic?: StringNullableFilter<"Enfant"> | string | null
    dateCreation?: DateTimeFilter<"Enfant"> | Date | string
    utilisateurCreateurId?: StringFilter<"Enfant"> | string
  }

  export type CommentaireUpsertWithWhereUniqueWithoutAuteurInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutAuteurInput, CommentaireUncheckedUpdateWithoutAuteurInput>
    create: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutAuteurInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutAuteurInput, CommentaireUncheckedUpdateWithoutAuteurInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutAuteurInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutAuteurInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id?: StringFilter<"Commentaire"> | string
    contenu?: StringFilter<"Commentaire"> | string
    auteurId?: StringFilter<"Commentaire"> | string
    enfantId?: StringFilter<"Commentaire"> | string
    creeLe?: DateTimeFilter<"Commentaire"> | Date | string
  }

  export type UtilisateurCreateWithoutEnfantsInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
  }

  export type UtilisateurUncheckedCreateWithoutEnfantsInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type UtilisateurCreateOrConnectWithoutEnfantsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutEnfantsInput, UtilisateurUncheckedCreateWithoutEnfantsInput>
  }

  export type DocumentCreateWithoutEnfantInput = {
    id?: string
    url: string
    nomFichierOriginal: string
    uploadedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutEnfantInput = {
    id?: string
    url: string
    nomFichierOriginal: string
    uploadedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutEnfantInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutEnfantInput, DocumentUncheckedCreateWithoutEnfantInput>
  }

  export type DocumentCreateManyEnfantInputEnvelope = {
    data: DocumentCreateManyEnfantInput | DocumentCreateManyEnfantInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutEnfantInput = {
    id?: string
    contenu: string
    creeLe?: Date | string
    auteur: UtilisateurCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutEnfantInput = {
    id?: string
    contenu: string
    auteurId: string
    creeLe?: Date | string
  }

  export type CommentaireCreateOrConnectWithoutEnfantInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutEnfantInput, CommentaireUncheckedCreateWithoutEnfantInput>
  }

  export type CommentaireCreateManyEnfantInputEnvelope = {
    data: CommentaireCreateManyEnfantInput | CommentaireCreateManyEnfantInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutEnfantsInput = {
    update: XOR<UtilisateurUpdateWithoutEnfantsInput, UtilisateurUncheckedUpdateWithoutEnfantsInput>
    create: XOR<UtilisateurCreateWithoutEnfantsInput, UtilisateurUncheckedCreateWithoutEnfantsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutEnfantsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutEnfantsInput, UtilisateurUncheckedUpdateWithoutEnfantsInput>
  }

  export type UtilisateurUpdateWithoutEnfantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutEnfantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutEnfantInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutEnfantInput, DocumentUncheckedUpdateWithoutEnfantInput>
    create: XOR<DocumentCreateWithoutEnfantInput, DocumentUncheckedCreateWithoutEnfantInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutEnfantInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutEnfantInput, DocumentUncheckedUpdateWithoutEnfantInput>
  }

  export type DocumentUpdateManyWithWhereWithoutEnfantInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutEnfantInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    nomFichierOriginal?: StringFilter<"Document"> | string
    enfantId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type CommentaireUpsertWithWhereUniqueWithoutEnfantInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutEnfantInput, CommentaireUncheckedUpdateWithoutEnfantInput>
    create: XOR<CommentaireCreateWithoutEnfantInput, CommentaireUncheckedCreateWithoutEnfantInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutEnfantInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutEnfantInput, CommentaireUncheckedUpdateWithoutEnfantInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutEnfantInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutEnfantInput>
  }

  export type EnfantCreateWithoutDocumentsInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateur: UtilisateurCreateNestedOneWithoutEnfantsInput
    observations?: CommentaireCreateNestedManyWithoutEnfantInput
  }

  export type EnfantUncheckedCreateWithoutDocumentsInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateurId: string
    observations?: CommentaireUncheckedCreateNestedManyWithoutEnfantInput
  }

  export type EnfantCreateOrConnectWithoutDocumentsInput = {
    where: EnfantWhereUniqueInput
    create: XOR<EnfantCreateWithoutDocumentsInput, EnfantUncheckedCreateWithoutDocumentsInput>
  }

  export type EnfantUpsertWithoutDocumentsInput = {
    update: XOR<EnfantUpdateWithoutDocumentsInput, EnfantUncheckedUpdateWithoutDocumentsInput>
    create: XOR<EnfantCreateWithoutDocumentsInput, EnfantUncheckedCreateWithoutDocumentsInput>
    where?: EnfantWhereInput
  }

  export type EnfantUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: EnfantWhereInput
    data: XOR<EnfantUpdateWithoutDocumentsInput, EnfantUncheckedUpdateWithoutDocumentsInput>
  }

  export type EnfantUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateur?: UtilisateurUpdateOneRequiredWithoutEnfantsNestedInput
    observations?: CommentaireUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateurId?: StringFieldUpdateOperationsInput | string
    observations?: CommentaireUncheckedUpdateManyWithoutEnfantNestedInput
  }

  export type UtilisateurCreateWithoutCommentairesInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enfants?: EnfantCreateNestedManyWithoutUtilisateurCreateurInput
  }

  export type UtilisateurUncheckedCreateWithoutCommentairesInput = {
    id?: string
    nom: string
    email: string
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enfants?: EnfantUncheckedCreateNestedManyWithoutUtilisateurCreateurInput
  }

  export type UtilisateurCreateOrConnectWithoutCommentairesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
  }

  export type EnfantCreateWithoutObservationsInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateur: UtilisateurCreateNestedOneWithoutEnfantsInput
    documents?: DocumentCreateNestedManyWithoutEnfantInput
  }

  export type EnfantUncheckedCreateWithoutObservationsInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
    utilisateurCreateurId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutEnfantInput
  }

  export type EnfantCreateOrConnectWithoutObservationsInput = {
    where: EnfantWhereUniqueInput
    create: XOR<EnfantCreateWithoutObservationsInput, EnfantUncheckedCreateWithoutObservationsInput>
  }

  export type UtilisateurUpsertWithoutCommentairesInput = {
    update: XOR<UtilisateurUpdateWithoutCommentairesInput, UtilisateurUncheckedUpdateWithoutCommentairesInput>
    create: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutCommentairesInput, UtilisateurUncheckedUpdateWithoutCommentairesInput>
  }

  export type UtilisateurUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enfants?: EnfantUpdateManyWithoutUtilisateurCreateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enfants?: EnfantUncheckedUpdateManyWithoutUtilisateurCreateurNestedInput
  }

  export type EnfantUpsertWithoutObservationsInput = {
    update: XOR<EnfantUpdateWithoutObservationsInput, EnfantUncheckedUpdateWithoutObservationsInput>
    create: XOR<EnfantCreateWithoutObservationsInput, EnfantUncheckedCreateWithoutObservationsInput>
    where?: EnfantWhereInput
  }

  export type EnfantUpdateToOneWithWhereWithoutObservationsInput = {
    where?: EnfantWhereInput
    data: XOR<EnfantUpdateWithoutObservationsInput, EnfantUncheckedUpdateWithoutObservationsInput>
  }

  export type EnfantUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateur?: UtilisateurUpdateOneRequiredWithoutEnfantsNestedInput
    documents?: DocumentUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurCreateurId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantCreateManyUtilisateurCreateurInput = {
    id?: string
    nom: string
    dateNaissance: Date | string
    sexe: string
    commune: string
    parentNom: string
    parentTelephone: string
    parentEmail: string
    statutDossier?: $Enums.StatutDossier
    diagnostic?: string | null
    dateCreation?: Date | string
  }

  export type CommentaireCreateManyAuteurInput = {
    id?: string
    contenu: string
    enfantId: string
    creeLe?: Date | string
  }

  export type EnfantUpdateWithoutUtilisateurCreateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutEnfantNestedInput
    observations?: CommentaireUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantUncheckedUpdateWithoutUtilisateurCreateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutEnfantNestedInput
    observations?: CommentaireUncheckedUpdateManyWithoutEnfantNestedInput
  }

  export type EnfantUncheckedUpdateManyWithoutUtilisateurCreateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    sexe?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    parentNom?: StringFieldUpdateOperationsInput | string
    parentTelephone?: StringFieldUpdateOperationsInput | string
    parentEmail?: StringFieldUpdateOperationsInput | string
    statutDossier?: EnumStatutDossierFieldUpdateOperationsInput | $Enums.StatutDossier
    diagnostic?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    enfant?: EnfantUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    enfantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    enfantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyEnfantInput = {
    id?: string
    url: string
    nomFichierOriginal: string
    uploadedAt?: Date | string
  }

  export type CommentaireCreateManyEnfantInput = {
    id?: string
    contenu: string
    auteurId: string
    creeLe?: Date | string
  }

  export type DocumentUpdateWithoutEnfantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutEnfantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutEnfantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nomFichierOriginal?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUpdateWithoutEnfantInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UtilisateurUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutEnfantInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    auteurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyWithoutEnfantInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    auteurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
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