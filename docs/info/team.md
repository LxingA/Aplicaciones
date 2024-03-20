---
layout: page
---
<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamMembers} from 'vitepress/theme';
import {useData} from 'vitepress';
const {site} = useData();
const $asset$ = site["getter"]()["themeConfig"]["endpoint"]["asset"];
const $link$ = site["getter"]()["themeConfig"]["endpoint"]["shortener"];
const $members$ = [
    {
        avatar: `${$asset$}/user/akira.webp?v=b3RS71Uq`,
        name: "LxingA",
        title: "Desarrollador Web",
        links: [
            {
                icon: "github",
                link: $link$ + "/akira"
            }
        ]
    },
    {
        avatar: `${$asset$}/user/lamssie.webp?v=b3RS71Uq`,
        name: "Polet Muñiz",
        title: "Diseñadora Web",
        links: [
            {
                icon: "facebook",
                link: $link$ + "/polet"
            }
        ]
    }
];
</script>
<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Equipo de Desarrollo
        </template>
        <template #lead>
            Somos un equipo totalmente autodidacta y con ganas de aprender nuevas habilidades para enfrentar nuevos retos futuros
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="$members$"/>
</VPTeamPage>