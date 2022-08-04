import React from 'react';
import SplitPane from '@/components/SplitPane';
import homeBannerImage from "@/assets/banner-home.svg"
import githubLogo from "@/assets/logo-github.png"
import linkedinLogo from "@/assets/logo-linkedin.png"


export default function HomeBanner(){
    return(
                <SplitPane 
                    classes={
                        {
                            root:"w-full  border-1 border-black",
                            left:'w-1/3',
                            right:"w-2/3"
                        }
                    }
                    left={
                        <div className="h-full flex flex-col justify-center items-center text-3xl">
                            <p>Hello, my name is</p>
                            <h1 className="py-3 font-bold">Kevin Taulman</h1>
                            <p>
                                I build web applications.
                            </p>
                            <div className="placeholder-gray-300 mt-3 flex justify-evenly items-center">
                                {/* //Resume Tag */}
                                <a href='/' className=" text-sky-600 text-lg font-bold px-2 py-1 rounded border-2 border-sky-600 hover:bg-sky-600 hover:text-white">View Resume</a>
                                <a><img className="w-10" src={githubLogo}/></a>
                                <a><img className="w-10" src={linkedinLogo} /></a>
                            </div>
                        </div>
                    }
                    right={
                        <div>
                            <img src={homeBannerImage} alt='home banner'/>
                        </div>
                    }
                />

    )
}