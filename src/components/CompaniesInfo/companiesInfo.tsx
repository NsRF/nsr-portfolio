

export default function CompaniesInfo(){
    return (
        <>
            <div className="bg-neutral-900 rounded py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <h2 className="text-lg/8 font-semibold text-white">Some companies I&#39;ve already worked
                            on</h2>
                        <div
                            className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                            <img
                                alt="Comgas"
                                src="/companies/comgas-logo.png"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            />
                            <img
                                alt="CCAB"
                                src="https://ccab.org.br/wp-content/uploads/Logos-18-CCAB.png"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            />
                            <img
                                alt="Intelltech"
                                src="/companies/intelltech.png"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            />
                            <img
                                alt="MedGrupo"
                                src="/companies/medgrupo.png"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            />
                            <img
                                alt="Pncp"
                                src="/companies/pncp.webp"
                                width={158}
                                height={48}
                                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
