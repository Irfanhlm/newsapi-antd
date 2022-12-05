import { Button } from 'antd';
import { Card } from 'antd';

const Cards = (props: any) => {
    const { Meta } = Card;

    return (
        <div className='concard' onClick={props.onCilckItem}>
            <Card
                hoverable
                style={{ width: '22rem' }}
                cover={<img alt={props.urlToImage} src={props.urlToImage} />}
            >
                <Meta title={props.title} description={props.description} />
                <br></br>
                <Button type='primary' className='detail-url' href={props.url}>News Detail...</Button>
            </Card>
        </div>
    )
}

export { Cards };