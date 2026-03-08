export default class CollectionHasNotValidatorException extends Error
{
    public constructor(name: string)
    {
        super()

        this.name = "Collection Has Not Validator Exception"
        this.message = `Desired collection under opration: "${name}" has not an own validation schema.`
    }
}
