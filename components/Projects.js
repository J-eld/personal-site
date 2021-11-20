import React from 'react';
import styles from 'styles/Projects.module.css';
import HTMLLogo from 'assets/HTMLLogo.svg';
import CSSLogo from 'assets/CSSLogo.svg';
import ReactLogo from 'assets/ReactLogo.svg';
import NextJSLogo from 'assets/NextJSLogo.svg';
import MYSQLLogo from 'assets/MYSQLLogo.svg';
import NodeJSLogo from 'assets/NodeJSLogo.svg';
import DockerLogo from 'assets/DockerLogo.svg';
import AWSLogo from 'assets/AWSLogo.svg';
import TypescriptLogo from 'assets/TypeScriptLogo.svg'; 
import PostgresLogo from 'assets/PostgresLogo.svg';
import TailwindLogo from 'assets/TailwindLogo.svg';
import Image from 'next/image'
import ProjectImageCarousel from './ProjectImageCarousel'


export default function Projects() {
    return (
        <div className={styles.projectRoot}>
            <div className={styles.projectCard}>
                <div className={styles.projectCardTitle}>
                    Attendance App
                </div>
                <div className={styles.photos}><ProjectImageCarousel folder="attendance-app-photos" numberOfPhotos={6} /></div>
                <div className={styles.projectCardDescription}>
                    This is an internal project done for Mission Ready that tracks candidate attendance.
                    As the company grew, a more robust and scalable way to track attendance became necessary.
                    This project took inspiration from the Covid-19 Tracer App by utilising QR code scanning
                    as a means for tracking attendance. Each day the candidates are presented a QR Code to scan, leading them to a login portal 
                    where they may log in using their Office 365 account, where they are then marked as present for that session.
                </div>
                <div className={styles.projectCardTechnologiesUsed}>
                    <div className={styles.technologiesUsedTitle}>
                        Technologies used: 
                    </div>
                    <div className={styles.technologies}>
                        <div className={styles.technology}>
                            <Image src={HTMLLogo} width={30} height={30} /> HTML
                        </div>
                        <div className={styles.technology}>
                            <Image src={CSSLogo} width={30} height={30} /> CSS
                        </div>
                        <div className={styles.technology}>
                            <Image src={ReactLogo} width={30} height={30} /> React
                        </div>
                        <div className={styles.technology}>
                            <Image src={NextJSLogo} width={207/4} height={124/4} /> NextJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={NodeJSLogo} width={590/12} height={361/12} /> NodeJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={MYSQLLogo} width={794/22} height={1123/22} /> MYSQL
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectCard}>
                <div className={styles.projectCardTitle}>
                    Technius
                </div>
                <div className={styles.photos}><ProjectImageCarousel folder="technius-photos" numberOfPhotos={5} /></div>
                <div className={styles.projectCardDescription}>
                    A project done for Mission Ready. This project seeks to provide an entryway for young children
                    into the tech industry. A user may sign on to the Technius platform to gain access to a playable 
                    game where decisions must be made in order to reach the end. Based on these decisions a player is 
                    given a report/overview of their results, including their top measured personal qualities as well as 
                    a suggestion of a tech career pathway they would be most likely to succeed in.
                </div>
                <div className={styles.projectCardTechnologiesUsed}>
                <div className={styles.technologiesUsedTitle}>
                        Technologies used: 
                    </div>
                    <div className={styles.technologies}>
                        <div className={styles.technology}>
                            <Image src={HTMLLogo} width={30} height={30} /> HTML
                        </div>
                        <div className={styles.technology}>
                            <Image src={CSSLogo} width={30} height={30} /> CSS
                        </div>
                        <div className={styles.technology}>
                            <Image src={ReactLogo} width={30} height={30} /> React
                        </div>
                        <div className={styles.technology}>
                            <Image src={NextJSLogo} width={207/4} height={124/4} /> NextJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={NodeJSLogo} width={590/12} height={361/12} /> NodeJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={DockerLogo} width={2500/50} height={2100/50} /> Docker
                        </div>
                        <div className={styles.technology}>
                            <Image src={AWSLogo} width={251/8} height={150/8} /> AWS
                        </div>
                        <div className={styles.technology}>
                            <Image src={MYSQLLogo} width={794/22} height={1123/22} /> MYSQL
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectCard}>
                <div className={styles.projectCardTitle}>
                    Where-to-Watch
                </div>
                <div className={styles.photos}><ProjectImageCarousel folder="where-to-watch-photos" numberOfPhotos={4} /></div>
                <div className={styles.projectCardDescription}>
                    A personal project that allows a user to search any TV show or movie, and provides information about the show/movie
                    as well as where it is available to stream on demand in their country. If the show/movie is not available in their
                    country, they are free to browse through a list of countries where the selected media is available to stream.<br/>
                    Check out the source code <a style={{color: 'blue'}} href="https://github.com/J-eld/where-to-watch" target="_blank"><u>here.</u></a> <br/>
                    Check out a demo by clicking <a style={{color: 'blue'}} href="https://where-to-watch.vercel.app/" target="_blank"><u>here.</u></a>
                </div>
                <div className={styles.projectCardTechnologiesUsed}>
                    <div className={styles.technologiesUsedTitle}>
                        Technologies used: 
                    </div>
                    <div className={styles.technologies}>
                        <div className={styles.technology}>
                            <Image src={HTMLLogo} width={30} height={30} /> HTML
                        </div>
                        <div className={styles.technology}>
                            <Image src={CSSLogo} width={30} height={30} /> CSS
                        </div>
                        <div className={styles.technology}>
                            <Image src={TypescriptLogo} width={30} height={30} /> TypeScript
                        </div>
                        <div className={styles.technology}>
                            <Image src={ReactLogo} width={30} height={30} /> React
                        </div>
                        <div className={styles.technology}>
                            <Image src={NextJSLogo} width={207/4} height={124/4} /> NextJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={NodeJSLogo} width={590/12} height={361/12} /> NodeJS
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectCard}>
                <div className={styles.projectCardTitle}>
                    Url Shortener App
                </div>
                <div className={styles.photos}><ProjectImageCarousel folder="url-shortener-app-photos" numberOfPhotos={1} /></div>
                <div className={styles.projectCardDescription}>
                    A simple URL shortener app, pass in a long url to recieve a shortened url thats easier to share, that will redirect to the full site.
                    The purpose of this project was to gain some practice and experience using new technologies like TypeScript Postgres and Tailwind CSS<br/>
                    Check out the source code <a style={{color: 'blue'}} href="https://github.com/J-eld/url-minifier" target="_blank"><u>here.</u></a> <br/>
                    Check out a demo by clicking <a style={{color: 'blue'}} href="https://url-minifier.vercel.app/" target="_blank"><u>here.</u></a>
                </div>
                <div className={styles.projectCardTechnologiesUsed}>
                    <div className={styles.technologiesUsedTitle}>
                        Technologies used: 
                    </div>
                    <div className={styles.technologies}>
                    <div className={styles.technology}>
                            <Image src={HTMLLogo} width={30} height={30} /> HTML
                        </div>
                        <div className={styles.technology}>
                            <Image src={CSSLogo} width={30} height={30} /> CSS
                        </div>
                        <div className={styles.technology}>
                            <Image src={TypescriptLogo} width={30} height={30} /> TypeScript
                        </div>
                        <div className={styles.technology}>
                            <Image src={ReactLogo} width={30} height={30} /> React
                        </div>
                        <div className={styles.technology}>
                            <Image src={NextJSLogo} width={207/4} height={124/4} /> NextJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={NodeJSLogo} width={590/12} height={361/12} /> NodeJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={PostgresLogo} width={590/12} height={361/12} /> PostgreSQL
                        </div>
                        <div className={styles.technology}>
                            <Image src={TailwindLogo} width={590/12} height={361/12} /> Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectCard}>
                <div className={styles.projectCardTitle}>
                    Portfolio Website
                </div>
                <div className={styles.photos}><ProjectImageCarousel folder="portfolio-site-photos" numberOfPhotos={1} /></div>
                <div className={styles.projectCardDescription}>
                    A website that showcases some of the projects that I've been working on. My goal is to keep this website as up to date as possible,
                    but feel free to check out my github from the link in the footer.<br/>
                    Check out the source code <a style={{color: 'blue'}} href="https://github.com/J-eld/personal-site" target="_blank"><u>here.</u></a> <br/>
                </div>
                <div className={styles.projectCardTechnologiesUsed}>
                    <div className={styles.technologiesUsedTitle}>
                        Technologies used: 
                    </div>
                    <div className={styles.technologies}>
                    <div className={styles.technology}>
                            <Image src={HTMLLogo} width={30} height={30} /> HTML
                        </div>
                        <div className={styles.technology}>
                            <Image src={CSSLogo} width={30} height={30} /> CSS
                        </div>
                        <div className={styles.technology}>
                            <Image src={ReactLogo} width={30} height={30} /> React
                        </div>
                        <div className={styles.technology}>
                            <Image src={NextJSLogo} width={207/4} height={124/4} /> NextJS
                        </div>
                        <div className={styles.technology}>
                            <Image src={NodeJSLogo} width={590/12} height={361/12} /> NodeJS
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projectCard}>
                <div className={styles.projectCardTitle}>
                    Weather App
                </div>
                <div className={styles.photos}><ProjectImageCarousel folder="weather-app-photos" numberOfPhotos={2} /></div>
                <div className={styles.projectCardDescription}>
                    A simple weather app that shows the weather in the users region, and allows the user to search
                    through other regions as well as toggle the current temperature between metric and imperial units.<br/>
                    Check out the source code <a style={{color: 'blue'}} href="https://github.com/J-eld/weather-app" target="_blank"><u>here.</u></a> <br/>
                    Check out a demo by clicking <a style={{color: 'blue'}} href="https://weather-app-five-indol.vercel.app/" target="_blank"><u>here.</u></a>
                </div>
                <div className={styles.projectCardTechnologiesUsed}>
                    <div className={styles.technologiesUsedTitle}>
                        Technologies used: 
                    </div>
                    <div className={styles.technologies}>
                        <div className={styles.technology}>
                            <Image src={HTMLLogo} width={30} height={30} /> HTML
                        </div>
                        <div className={styles.technology}>
                            <Image src={CSSLogo} width={30} height={30} /> CSS
                        </div>
                        <div className={styles.technology}>
                            <Image src={ReactLogo} width={30} height={30} /> React
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
