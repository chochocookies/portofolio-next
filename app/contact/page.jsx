"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+62) 851 5636 8313",
    },
    {
        icon: <FaEnvelope />,
        title: "Mail",
        description: "ekoaryanto11@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Cipayung, East Jakarta 13680",
    },
];

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'service_e56ok0a', 
            'template_1k0xn44', 
            e.target,
            'uApnVXya-uz27YFWW'  

        ).then((result) => {
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent.',
                icon: 'success',
                confirmButtonText: 'Ok',
                background: '#1c1c22',
                color: '#ffffff',     
                confirmButtonColor: '#00ff99'
            });
        }, (error) => {
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue sending your message. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok',
                background: '#1c1c22',
                color: '#ffffff',    
                confirmButtonColor: '#e74c3c'
            });
        });

        e.target.reset(); // Reset form after submission
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#2727c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's Work together</h3>
                            <p className="text-white/60">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out and let's create something amazing together!</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="first_name" placeholder="Firstname" required />
                                <Input type="text" name="last_name" placeholder="Lastname" required />
                                <Input type="email" name="email" placeholder="Email address" required />
                                <Input type="tel" name="phone" placeholder="Phone number" required />
                            </div>
                            {/* select */}
                            <Select name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="web-development">Web Development</SelectItem>
                                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                        <SelectItem value="logo-design">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea name="message" className="h-[200px]" placeholder="Type your message here." required />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-[200px]">Send message</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2727c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
