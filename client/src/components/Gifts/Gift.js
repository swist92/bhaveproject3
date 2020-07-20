import React from "react";

import Gifts from "../../images/gifts.png";
import Flower from "../../images/flower.png";
import GiftCards from "../../images/giftCards.png";
import SmileBox from "../../images/smilebox.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Gift() {
	return (
		<>
			<Container id="gift-cont">
				<p>Pay it forward. Help a friend in need. Brighten someone's day...</p>
				<Row>
					<Card id="gift-card">
						<a href="https://www.gifts.com/finder">
							<img src={Gifts} id="gift-pic"></img>
						</a>
					</Card>
					<Card id="gift-card">
						<a href="https://www.1800flowers.com/?r=newengengoobrcore&adcampaign=Branded+l_DE1+fe1d&adcampaignid=960097369&adgroupid=46196718125&adid=415917956378&adtype=text&kw=1800flowers&matchtype=e&addisttype=g&gclid=EAIaIQobChMIyda2qMLa6gIV0D2tBh3mugPYEAAYASAAEgJ97PD_BwE">
							<img src={Flower} id="gift-pic"></img>
						</a>
					</Card>
					<Card id="gift-card">
						<a href="https://www.giftcards.com/virtual-gift-cards">
							<img src={GiftCards} id="gift-pic"></img>
						</a>
					</Card>
					<Card id="gift-card">
						<a href="https://www.smilebox.com/lp/smilebox-plus-ecards-create/?f=2&sbmojo=plus&sbid=3846&campid=1602221213&campfor=Cards&gclid=EAIaIQobChMIkdCeuMLa6gIVBR6tBh1kBQuoEAAYAyAAEgKH5PD_BwE">
							<img src={SmileBox} id="gift-pic"></img>
						</a>
					</Card>
				</Row>
			</Container>
		</>
	);
}

export default Gift;
