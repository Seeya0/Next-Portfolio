import { IconType } from "react-icons";

export interface Service {
    title: string,
    about: string,
    Icon: IconType,
}

export interface MySkill {
    name: string,
    level: string,
    Icon: IconType,
}

export interface MyProject {
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    tags: string[],
}

export type Category = "react" | "node" | "express" | "mongo" | "typescript" | "all"