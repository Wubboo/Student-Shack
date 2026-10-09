import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiUrl = "https://api.github.com/users/";
const authors = [
    { name: "Mick Olthoff", account: "molthoff-student" },
    { name: "Wubbo Boiten", account: "Wubboo" },
    { name: "Max de Wit", account: "MaxDeWit" },
];

const requestInit = {
    headers: {
        Accept: "application/vnd.github+json",
    },
};

async function fetchGithubUser(account) {
    const response = await fetch(apiUrl + account, requestInit);

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }

    const json = await response.json();
    return json;
}

async function writeToFile(path, data) {
    fs.writeFile(path, JSON.stringify(data, undefined, 4), (error) => {
        if (error) {
            console.error("Failed to write file:", error);
            return;
        }

        console.log("File written successfully!");
    });
}

async function main() {
    try {
        const filePath = path.join(__dirname, "..", "public", "authors.json");

        const data = await Promise.all(
            authors.map(async (author) => {
                const githubUser = await fetchGithubUser(author.account);

                return {
                    legalName: author.name,
                    ...githubUser,
                };
            }),
        );

        await writeToFile(filePath, data);
    } catch (reason) {
        console.error(reason.message);
    }
}

await main();
