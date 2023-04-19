import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image"

const TeaProcess = () => {
    return (
        <Container>
            <h1>Tea Making Process</h1>
            <hr />
            <Row>
                <Col className="col-md-8 col-12">
                    <h3>Tea Growing</h3>
                    <p>
                        Tea can grow in many locations but the combination of soil, water, humidity, altitude, and growing environment
                        contributes to the taste and results.
                    </p>
                    <br/>
                    <h3>Tea Picking</h3>
                    <p>
                        The first spring is typically the most valuable and important tea season.
                        Since spring is the time new leaves sprout. Countries have different start of spring seasons.
                        In India it starts in end of February, China Mid March, Taiwan April, and Japan May.
                        Some tea makers have started growing tea outside of typically grown areas such as Scotland (weetea).
                        <br/>
                        <br/>
                        The Spring season is the first flush. Summer is the second flush.
                        Autumn Flush is collected in the Autumn season.
                        Winter typically only done in Taiwan but is collected in October/November.
                        <br/>
                        <br/>
                        Each leaf is hand picked.
                    </p>
                    <br/>
                </Col>
                <Col className="col-md-6 col-12">
                </Col>
            </Row>
            <h3>
                Tea Making Process
            </h3>
            <p>
                The process starts left to right.
            </p>
            <Table striped bordered hover size>
                <thead class="table-dark">
                    <tr>
                        <th>Type</th>
                        <th>Tea Part</th>
                        <th>Withering / Blanching (Removing Humidity)</th>
                        <th>Rolling sometimes Oxidization</th>
                        <th>Baking/drying</th>
                        <th>Roasted</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>White</td>
                        <td>Buds / Tips</td>
                        <td>Typically not</td>
                        <td>Sometimes</td>
                        <td>Baked To Seal</td>
                        <td>Typically not</td>
                    </tr>
                    <tr>
                        <td>Green</td>
                        <td>Newly Sprouted Leaves</td>
                        <td>De-moisturize<br />Pan fried and Steamed<br />Done to stop enzymes</td>
                        <td>Yes, but there is no oxidation due to the withering</td>
                        <td>Baked To Seal</td>
                        <td>Typically not. <br />Only the Hoji-cha (Made from ban-cha)</td>
                    </tr>
                    <tr>
                        <td>Yellow</td>
                        <td>Newly Sprouted Leaves</td>
                        <td>De-moisturize<br />Pan fried and Steamed<br />Done to stop enzymes</td>
                        <td>Yes, but there is no oxidation due to the withering</td>
                        <td>Baked Multiple Longer</td>
                        <td>Typically not</td>
                    </tr>
                    <tr>
                        <td>Oolong</td>
                        <td>Newly Sprouted Leaves</td>
                        <td>Sometimes</td>
                        <td>Lighter Bruising(12-80 Percent) <br /> Usually Shaken or Rolled</td>
                        <td>Baked To Seal</td>
                        <td>Some Oolongs get roasted</td>
                    </tr>
                    <tr>
                        <td>Black</td>
                        <td>Newly Sprouted Leaves</td>
                        <td>None</td>
                        <td>Bruising For Oxidation</td>
                        <td>Baked To Seal</td>
                        <td>Typically not</td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <Col className="col-md-1 col-12">
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>Matcha</h4>
                    <p>
                        Matcha is Tencha but milled.
                        The leaves are shade grown and typically grown in Japan.
                        But to keep up with demand Japanese companies have begun growing it in China.
                        For 4 weeks the plants are shade grown and the leaves become 80% darker.
                        The stalks, stems, and veins are removed.
                        Then dried to be milled typically in stone for the first flush in ceremonial grade teas.
                    </p>
                </Col>
            </Row>

            <h3>Health Effects</h3>
            <Row>
                <Col className="col-md-1 col-12">
                    <Image src="./TeaPhotos/IMG_3036.png" width="100%" height="100%"></Image>
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>White Tea</h4>
                    <p>Lots of Caffeine (exception of Nan Mei White), rich with antioxidants, and least process of the tea.</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-1 col-12">
                    <Image src="./TeaPhotos/IMG_3037.png" width="100%" height="100%"></Image>
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>Green Tea</h4>
                    <p>Less caffeine then white tea, and rich in antioxidants (EGCG).</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-1 col-12">
                    <Image src="./TeaPhotos/IMG_3037.png" width="100%" height="100%"></Image>
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>Yellow Tea</h4>
                    <p>Less caffeine than white tea, and rich in antioxidants (EGCG). Since it is baked so many times it is less acidic then green tea.</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-1 col-12">
                    <Image src="./TeaPhotos/IMG_3038.png" width="100%" height="100%"></Image>
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>Black Tea</h4>
                    <p>Less caffeine then white tea, and rich in antioxidants (Thearubigins).</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-1 col-12">
                    <Image src="./TeaPhotos/IMG_3040.png" width="100%" height="100%"></Image>
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>Oolong Tea</h4>
                    <p>Combinations of Green and Black teas</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-1 col-12">
                    <Image src="./TeaPhotos/IMG_3039.png" width="100%" height="100%"></Image>
                </Col>
                <Col className="col-md-11 col-12">
                    <h4>Herbals</h4>
                    <p>Holy ginger does many things (Holy Basil and Ginger). There's a sheet of health benefits near the herbal sections since herbals have a wide variety.</p>
                </Col>
            </Row>

            <h3>Storage</h3>
            <p>Cool, Dry place, airtight, outside of sunlight. </p>
            <h3>Recommendations</h3>
            <p>
                Working at <a href="https://happyearthtea.com">Happy Earth Tea</a> there are certain way to address tea recommendations.
                <br />
                A good first question to ask is caffeinated or non caffeinated. Since many people are coming for non-caffeine options.
                <br />
                Specials are good for people starting. They're the mixed cocktails of the tea bar.
                <br />
                Flights are also really good. Typically Black teas are not recommend for starters because they have uniqueness that is harder to pick up. Oolongs have the widest variety of flavors and is a good place to figure out what kind of tea is a good direction.
                <br />
                Flavored teas and Black teas are typically bought by customers or gifts that are older.
                <br />
                Make sure each of the customers get 3 recommendations with out overloading them with options.
            </p>
        </Container>
    )
};
export default TeaProcess;