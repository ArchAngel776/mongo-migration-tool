export default class CollectionNotFoundException extends Error
{
    public constructor(name: string)
    {
        super()

        this.name = "Collection Not Found Exception"
        this.message = `Desired collection under opration: "${name}" was not found within the database.`
    }
}
