export default function templateName(name: string): string
{
    return name.replace(/[A-Za-z0-9]+$/, match => match.replaceAll(/([A-Z])/g, "_$1").substring(1)).toLocaleLowerCase()
}
