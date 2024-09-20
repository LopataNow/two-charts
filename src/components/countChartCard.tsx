import dynamic from 'next/dynamic';
import { Card } from "antd";
const Line = dynamic(() => import('@ant-design/charts').then(({ Line }) => Line),
    { ssr: false }
);

interface CountChartCardProps {
    data: any;
}

export function CountChartCard({data}: CountChartCardProps) {
    console.log(data);
    const config = {
        data,
        height: 400,
        xField: 'date',
        yField: 'metric_value',
    };
    
    return (
        <Card title="Count Chart">
            <Line {...config} />
        </Card>
    );
}