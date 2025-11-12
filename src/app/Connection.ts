import { MongoClient } from "mongodb"


export default class Connection
{
    protected host: string

    protected port: number

    protected replSet: string


    public constructor(host: string, port: number, replSet: string)
    {
        this.host = host
        this.port = port

        this.replSet = replSet
    }

    public connect(database: string, user: string, password: string): Promise<MongoClient>
    {
        const client = new MongoClient(this.createURL(database, user, password))

        return client.connect()
    }

    protected createURL(database: string, user: string, password: string): string
    {
        return `mongodb://${user}:${password}@${this.host}:${this.port}/${database}?replicaSet=${this.replSet}`
    }

    public static create(host: string, port: number, replSet: string): Connection
    {
        return new Connection(host, port, replSet)
    }
}
