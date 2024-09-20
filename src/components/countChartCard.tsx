import dynamic from 'next/dynamic';
import { Avatar, Button, Card } from "antd";
import { MessageOutlined } from '@ant-design/icons';
const Line = dynamic(() => import('@ant-design/charts').then(({ Line }) => Line),
    { ssr: false }
);

interface CountChartCardProps {
    data: any;
}

const avatar = "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1";

export function CountChartCard({data}: CountChartCardProps) {
    console.log(data);
    const config = {
        data,
        height: 400,
        xField: 'date',
        yField: 'metric_value',
    };
    
    return (
        <Card 
            className='chart-card' 
            title="Count Chart" 
            actions={[
                <div key='botton' className='card-botton'>
                    <Avatar src={avatar}></Avatar>
                    <Button type="text">3 <MessageOutlined/></Button>
                </div>
            ]}>
            <Line {...config} />
        </Card>
    );
}