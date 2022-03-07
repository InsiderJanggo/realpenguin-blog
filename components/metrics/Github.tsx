import { FC } from "react";
import { GitHub } from "@/lib/types";
import fetcher from "@/lib/fetcher";
import useSWR from 'swr';
import MetricCard from "./Card";

const GitHubCard: FC = (): JSX.Element => {
    const { data } = useSWR<GitHub>('/api/github', fetcher);
    const stars = new Number(data?.stars);
    const link = 'https://github.com/InsiderJanggo';
    return(
        <MetricCard
            header="GitHub Stars"
            link={link}
            metric={stars as number}
            isCurrency={false}
        />
    )
}   

export default GitHubCard;