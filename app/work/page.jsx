"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla!",
        stack: [
            { name: "Html 5" },
            { name: "CSS 3" },
            { name: "Javascript" },
        ],
        image: "/assets/work/thumb1.jpg",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "backend",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla!",
        stack: [
            { name: "Html 5" },
            { name: "CSS 3" },
            { name: "Javascript" },
        ],
        image: "/assets/work/thumb1.jpg",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla!",
        stack: [
            { name: "Html 5" },
            { name: "CSS 3" },
            { name: "Javascript" },
        ],
        image: "/assets/work/thumb1.jpg",
        live: "",
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (index) => {
        setProject(projects[index]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        </div>
                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                        {/* project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/* stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return <li key={index}
                                    className="text-xl text-accent"
                                >{item.name}
                                    {/* remove the last comma */}
                                    {index !== project.stack.length - 1 && ","}</li>
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20 mb-1" ></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4 mt-2">
                            {/* live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent side="top" align="center">
                                            <div className="bg-white text-primary px-2 py-1 rounded-md">
                                                Live Project
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent side="top" align="center">
                                            <div className="bg-white text-primary px-2 py-1 rounded-md">
                                                Github repository
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] relative">
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={10000}
                            onChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <div key={index} className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
