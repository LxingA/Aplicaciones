/*
@author LxingA
@project CodeInk
@name Global
@date 09/03/24 01:00AM
@description Configuración Inicial para VitePress para el Proyecto
*/
import $Env$ from 'dotenv';
import {defineConfig} from 'vitepress';
import $Directory$ from 'path';
import $Fetcher$ from '../../util/fetch';
import type Service from '../../types/service';
$Env$["config"]({path:$Directory$["join"](__dirname,"/.env")});

/** Definición de la Configuración para la Generación de Documentaciones para el Proyecto */
export default async() => {
    const $key$: string = "xo7C8l6V";
    const $global$: Service = (await $Fetcher$({
        $method$: "GET",
        $cache$: true,
        $header$: {
            "X-CKeyP-H": process["env"]["CkAppEnvironmentCurrentApplicationID"],
            "X-CLangP-H": navigator["language"]["substring"](0,2)
        },
        $query$: {
            context: "service"
        },
        $path$: "/v1/global",
        $uri$: process["env"]["CkAppEnvironmentAPIEndPointURI"]
    }) as Service);
    let $ = (defineConfig({
        title: $global$["project"]["name"] + " " + $global$["name"],
        description: $global$["slogan"],
        lang: "es",
        appearance: "force-dark",
        outDir: ($Directory$["join"](__dirname,"/../../static")),
        head: [
            [
                "link",
                {
                    rel: "icon",
                    href: `${$global$["endpoint"]["asset"]}/favicon.ico?v=${$key$}`,
                    type: "image/x-icon"
                }
            ],
            [
                "script",
                {
                    async: "",
                    src: $global$["analytic"]["endpoint"]["replace"]("k",$global$["analytic"]["key"])
                }
            ],
            [
                "script",
                {},
                "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag(\"js\",new Date());gtag(\"config\",\""+$global$["analytic"]["key"]+"\");"
            ]
        ],
        themeConfig: {
            siteTitle: `${$global$["project"]["name"]} ${$global$["name"]}`,
            logo: `${$global$["endpoint"]["asset"]}/logo.webp?v=${$key$}`,
            footer: {
                message: "Bajo Licencia <a href=\"https://opensource.org/license/mit\" target=\"_blank\">MIT</a>. Gracias a <a href=\"https://vitepress.dev\" target=\"_blank\">VitePress</a>",
                copyright: `&copy; 2012 ~ ${(new Date())["getFullYear"]()} "${$global$["project"]["alternative"][2]}" mediante "${$global$["project"]["alternative"][0]}" y "${$global$["project"]["alternative"][1]}" por <a href="${$global$["endpoint"]["shortener"]}/akira" target="_blank">${$global$["project"]["name"]}</a>`
            },
            search: {
                provider: "local"
            },
            socialLinks: [
                {
                    icon: "github",
                    link: $global$["endpoint"]["shortener"] + "/akira"
                }
            ],
            lastUpdated: {
                text: "Actualizado el"
            },
            outline: {
                label: "En está página"
            },
            sidebar: [
                {
                    text: "Información General",
                    items: [
                        {
                            text: "Equipo",
                            link: "/info/team"
                        },
                        {
                            text: "Curriculum Vitae",
                            link: "/info/cv"
                        }
                    ]
                },
                {
                    text: "Aplicaciones",
                    items: [
                        {
                            text: "Imprenta Express MTY",
                            link: "/web/inkexpress"
                        },
                        {
                            text: "LxingA Shortener",
                            link: "/web/shortener"
                        }
                    ]
                },
                {
                    text: "Videojuegos",
                    items: [
                        {
                            text: "Próximamente"
                        }
                    ]
                }
            ]
        },
        markdown: {
            image: {
                lazyLoading: true
            },
            container: {
                detailsLabel: "Información Adicional",
                tipLabel: "Nota"
            }
        }
    })) as any;
    $["themeConfig"]["endpoint"] = ($global$["endpoint"]);
    return (typeof($global$) != "string") && $;
};