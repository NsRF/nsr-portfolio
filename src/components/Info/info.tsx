'use client'
import {XMarkIcon} from "@heroicons/react/24/solid";
import {useState} from "react";


export default function Info(){
    const [showMessage, setShowMessage] = useState<boolean>(true);

    return (
        <>
            { showMessage &&
                <div className="fixed inset-x-0 bottom-0">
                    <div className="flex items-center gap-x-6 bg-neutral-800 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                        <p className="text-sm/6 text-white">
                            <a href="/nasser_farhat_resume.pdf" target="_blank" rel="noreferrer" download>
                                <strong className="font-semibold">Nasser Farhat</strong>
                                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                                    <circle r={1} cx={1} cy={1}/>
                                </svg>
                                Download CV&nbsp;<span
                                aria-hidden="true">&rarr;</span>
                            </a>
                        </p>
                        <div className="flex flex-1 justify-end">
                            <button onClick={() => setShowMessage(false)} type="button"
                                    className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon aria-hidden="true" className="size-5 text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
