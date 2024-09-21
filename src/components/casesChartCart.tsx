import dynamic from 'next/dynamic';
import { Avatar, Button, Card } from "antd";
import { MessageOutlined } from '@ant-design/icons';
import { getTestesVsCases } from '@/services-calls/gov-data';
import { useQuery } from '@tanstack/react-query';
const Pie = dynamic(() => import('@ant-design/plots').then(({ Pie }) => Pie),
    { ssr: false }
);

const avatar = "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1";

export function CasesChartCart() {
    const { data, isLoading } =  useQuery({
        queryKey: ['TestesVsCases'],
        queryFn: () => getTestesVsCases(),
    })

    console.log(data)

    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        height: 400,
        label: {
            text: 'value',
            position: 'outside',
        }
    };
    
    return (
        <Card 
            className='chart-card' 
            title="Count Chart" 
            loading={isLoading}
            actions={[
                <div key='botton' className='card-botton'>
                    <Avatar src={avatar}></Avatar>
                    <Button type="text">3 <MessageOutlined/></Button>
                </div>
            ]}>
            <Pie {...config} />
        </Card>
    );
}