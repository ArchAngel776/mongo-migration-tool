#!/usr/bin/env node


/**
 * Exception occured during command's type recognisation.
 * 
 * @extends {Error}
 */
class MigrationCommandException extends Error
{
    /**
     * Initialize exception
     * 
     * @param {string} command 
     */
    constructor(command)
    {
        super(`Command type "${command}" is unrecognised migration's action.`);

        this.name = "Migration: Command exception";
    }
}


/**
 * Main execution function of CLI.
 * 
 * @async
 * @param {string} command 
 * @param {string[]} args
 * @returns {Promise<void>}
 * @throws {MigrationCommandException}
 */
async function main(command, args)
{
    switch (command)
    {
        default:
        {
            throw new MigrationCommandException(command);
        }
    }
}


const [ command, ...args ] = process.argv.toSpliced(0, 2);


main(command, args)
    .then(() => {
        process.exit(0);
    })
    .catch(exception => {
        console.error(`${exception.name}: ${exception.message}`);
        process.exit(1);
    });
