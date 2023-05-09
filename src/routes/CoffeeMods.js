import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import Table from 'react-bootstrap/Table';

const CoffeeMods = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Coffee Machine Mods</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                    This is my espresso set up and mods.
                    At the bottom of the page will be a table with all of the mods and links for the parts. Along with roughly the prices I paid for them
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2><a id="Machine"><u>Machine Gaggia Classic Pro</u></a></h2>
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                <Col className="col-md-6 col-12">
                    <p>
                        The main machine I use is the Gaggia Classic Pro.
                        This single boiler machine has been known to be a very good home espresso starter machine.
                        This is due to the price level and performance of the machine.
                        <br />
                        <br />
                        Like many this was where my journey started.
                    </p>
                </Col>
                <Col className="col-md-6 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106272397635686/unmodded.png?width=254&height=391" height="100%" width="100%" alt="Unmodded Machine" />
                        <figcaption className="figure-caption">Original un-modded machine</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><a id="MachineBodyMods"><u>Machine Body Mods</u></a></h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Space was limited and I wanted to use some of my favorite mugs. One of the quickest mods I gravitated towards was the low profile drip tray.
                        Low profile drip tray to create space for larger cups, scales, and portafilters. It also has a storage space at the front of the tray.
                    </p>
                </Col>
            </Row>

            
            <Row className="justify-content-center">
                <Col className="col-md-4 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="alignment-center figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106235424845874/IMG_3014.png?width=413&height=550" height="80%" width="80%" alt="Unmodded Tray" />
                        <figcaption className="figure-caption">Original Tray</figcaption>
                    </figure>
                </Col>
                <Col className="col-md-4 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="alignment-center figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106234015551488/IMG_3013.png?width=413&height=550" height="80%" width="80%" alt="New Tray" />
                        <figcaption className="figure-caption">Low Profile Tray</figcaption>
                    </figure>
                </Col>
                <Col className="col-md-4 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="alignment-center figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106232505614356/IMG_3012.png?width=413&height=550" height="80%" width="80%" alt="Both Trays" />
                        <figcaption className="figure-caption">Side by side Height Comparison</figcaption>
                    </figure>
                </Col>
            </Row>

            <Row>
                <Col className="col-md-6 col-12">
                    <p>
                        The temperature loss to conduction was very noticeable in form of warmer parts of the machine where the boiler contacted the frame.
                        To address the issue spacers helped reduce the drifting by about half.
                        Thermal spacers to help with thermal drift of the boiler.
                    </p>
                </Col>
                <Col className="col-md-6 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="alignment-center figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106231436054609/IMG_2947.png?width=258&height=194" height="100%" width="100%" alt="" />
                        <figcaption className="figure-caption">Thermal spacer</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4><a id="Gagguino"><u>Gagguino</u></a></h4>
                </Col>
            </Row>

            <Row>
                <Col className="col-md-6 col-12" >
                    This mod adds a micro controller for temperature and pressure control.
                    I have an entire <a href="./#/Coffee">page</a> dedicated to the implementation.
                    This is the most involved mod and was pretty enjoyable putting it together.
                </Col>
                <Col className="col-md-6 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="alignment-center figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103105898068582411/IMG_2933.png?width=258&height=344" height="100%" width="100%" alt="Modded Machine" />
                        <figcaption className="figure-caption">Putting together the Gagguino</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2><a id="Portafilter"><u>Portafilter Mods</u></a></h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        For the portafilter, I used a wooden bottomless portafilter with VST 20g basket. To guide the coffee grinds in the portafilter I used a 58mm funnel.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-6 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106270933811210/IMG_3022.png?width=258&height=194" height="100%" width="100%" alt="Portafilter" />
                        <figcaption className="figure-caption">Modded Portafilter</figcaption>
                    </figure>
                </Col>
                <Col className="col-md-6 col-12 text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106220711227522/IMG_3015.png?width=129&height=244" height="100%" width="100%" alt="Tamp and distributor" />
                        <figcaption className="figure-caption">Wooden Tamp and distributor</figcaption>
                    </figure>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2><a id="Grinder"><u>Grinder Sette 30/270</u></a></h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    For my grinder I got the Sette 30 but the grind setting I used were between two of their step sizes.
                    To reach the precision I wanted I swapped out the burrs with a 270 adjustment assembly.
                    I didn't like the interface of the full 270 version because I wanted a simple grind button so this was a happy middle ground.
                </Col>
            </Row>
            <Row>
                <Col className ="text-center">
                    <figure className="figure text-center">
                        <Image className="figure-img img-fluid" src="https://media.discordapp.net/attachments/1103103292030058526/1103106269801357342/IMG_3016.png?width=174&height=232" height="75%" width="75%" alt="Modded Grinder" />
                        <figcaption className="figure-caption">Sette 30 with a Sette 270 micro adjustment assembly</figcaption>
                    </figure>
                </Col>
            </Row>
            
            
            <Row>
                <Col>
                    <h2> <a id="Excel"> <u>Table of Everything and Costs</u> </a> </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    The listed cost are rounded to the nearest half dollar and were the price I paid at the time.
                    <br/>
                    The total cost of everything ended up being about $1230.
                    <br />
                    The total cost of modding the espresso machine is $380.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mod Type</th>
                            <th>Cost</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gaggia Classic</td>
                            <td>Machine</td>
                            <td align="center" >400</td>
                            <td><a href="https://a.co/d/eCRD4Nn">Link</a></td>
                        </tr>
                        <tr>
                            <td>Timemore Scale</td>
                            <td>Scale</td>
                            <td align="center">60</td>
                            <td><a href="https://a.co/d/a1va0LR">Link</a></td>
                        </tr>
                        <tr>
                            <td>Sette 30 Conical Burr Grinder</td>
                            <td>Grinder</td>
                            <td align="center">300</td>
                            <td><a href="https://a.co/d/3IUoMVn">Link</a></td>
                        </tr>
                        <tr>
                            <td>Sette 270 Series Adjustment Assembly</td>
                            <td>Grinder</td>
                            <td align="center">90</td>
                            <td><a href="https://shop.baratza.com/sette-270-270w-adjustment-assembly">Link</a></td>
                        </tr>
                        <tr>
                            <td>Sette Shim & Allen Wrench Kit</td>
                            <td>Grinder</td>
                            <td align="center">5</td>
                            <td><a href="https://shop.baratza.com/sette-shim-allen-wrench-kit">Link</a></td>
                        </tr>
                        <tr>
                            <td>VST 20g basket</td>
                            <td>Portafilter</td>
                            <td align="center">35</td>
                            <td><a href="https://www.chriscoffee.com/products/vst-precision-insert-baskets?variant=12272882319396">Link</a></td>
                        </tr>
                        <tr>
                            <td>Bottomless portafilter</td>
                            <td>Portafilter</td>
                            <td align="center">61</td>
                            <td><a href="https://a.co/d/iwArk2d">Link</a></td>
                        </tr>
                        <tr>
                            <td>58mm Espresso Dosing Funnel</td>
                            <td>Portafilter</td>
                            <td align="center">20</td>
                            <td><a href="https://a.co/d/69ZUo27">Link</a></td>
                        </tr>
                        <tr>
                            <td>Wooden Tamp</td>
                            <td>Portafilter</td>
                            <td align="center">16</td>
                            <td>
                                <a href="https://www.amazon.com/gp/product/B08M5MGRT8/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1">
                                    Link
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Wooden Distributor</td>
                            <td>Portafilter</td>
                            <td align="center">32</td>
                            <td>
                                <a href="https://www.amazon.com/gp/product/B08787HYD1/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&amp;psc=1">
                                    Link
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Drip Tray low profile</td>
                            <td>Machine</td>
                            <td align="center">40</td>
                            <td><a href="https://www.etsy.com/listing/1251956347/extended-low-profile-drip-tray-gaggia?ref=yr_purchases">Link</a></td>
                        </tr>
                        <tr>
                            <td>Spacers</td>
                            <td>Machine</td>
                            <td align="center">5</td>
                            <td><a href="https://www.amazon.com/gp/product/B07P7J5K8Z/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1">Link</a></td>
                        </tr>
                        <tr>
                            <td>Knock Box</td>
                            <td>Knock Box</td>
                            <td align="center">24</td>
                            <td><a href="https://www.amazon.com/gp/product/B0016J76CE/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1">Link</a></td>
                        </tr>
                        <tr>
                            <td>3D printed parts (Control and Screen Enclosure)</td>
                            <td>Gagguino</td>
                            <td align="center">24</td>
                            <td><a href="https://gaggiuino.hudsoncreativegroup.com">Link</a></td>
                        </tr>
                        <tr>
                            <td>STM32F411CEU6</td>
                            <td>Gagguino</td>
                            <td align="center">5</td>
                            <td><a href="https://www.aliexpress.us/item/3256801269871873.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>ST-Link V2</td>
                            <td>Gagguino</td>
                            <td align="center">2</td>
                            <td><a href="https://www.aliexpress.us/item/2251832674387981.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>External Board</td>
                            <td>Gagguino</td>
                            <td align="center">1</td>
                            <td><a href="https://www.aliexpress.us/item/2251832139409398.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>ADS</td>
                            <td>Gagguino</td>
                            <td align="center">4</td>
                            <td><a href="https://www.aliexpress.us/item/2251832683106807.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>5v Relay 1 channel</td>
                            <td>Gagguino</td>
                            <td align="center">0.5</td>
                            <td><a href="https://www.aliexpress.us/item/3256803997020234.html?srcSns=sns_Copy&amp;spreadType=socialShare&amp;bizType=ProductDetail&amp;social_params=60175236718&amp;aff_fcid=b9641649463246d68691816f28d2adb3-1681317929152-01493-_vpUdrT&amp;tt=MG&amp;aff_fsk=_vpUdrT&amp;aff_platform=default&amp;sk=_vpUdrT&amp;aff_trace_key=b9641649463246d68691816f28d2adb3-1681317929152-01493-_vpUdrT&amp;shareId=60175236718&amp;businessType=ProductDetail&amp;platform=AE&amp;terminal_id=ad156c709e06460bbe3d920d9c310a1a&amp;afSmartRedirect=y&amp;gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>Nextion 2.4”</td>
                            <td>Gagguino</td>
                            <td align="center">22.5</td>
                            <td><a href="https://www.aliexpress.us/item/3256803271061345.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>MAX6675 Module + K Type Thermocouple</td>
                            <td>Gagguino</td>
                            <td align="center">4.5</td>
                            <td><a href="https://www.aliexpress.us/item/2251832724065302.html?spm=a2g0s.9042311.0.0.27424c4dj1CorW&amp;gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>M4 Temperature Sensor</td>
                            <td>Gagguino</td>
                            <td align="center">3</td>
                            <td><a href="https://www.aliexpress.us/item/3256804761765699.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>40DA SSR Relay</td>
                            <td>Gagguino</td>
                            <td align="center">6</td>
                            <td><a href="https://www.aliexpress.us/item/2255799859110393.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>18AWG - 1m: Black, Red &amp; White<br />22AWG - 5m: Black, Red &amp; White<br />26AWG - 5m: Black, Red, Blue &amp; Yellow</td>
                            <td>Gagguino</td>
                            <td align="center">9</td>
                            <td><a href="https://www.aliexpress.us/item/2255800441309579.html?spm=a2g0s.9042311.0.0.27424c4dj1CorW&amp;gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>Spade connectors M/F 6.3mm</td>
                            <td>Gagguino</td>
                            <td align="center">2</td>
                            <td><a href="https://www.aliexpress.us/item/3256802579044914.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>RobotDYN dimmer module - Dimmer 4A-400V</td>
                            <td>Gagguino</td>
                            <td align="center">3</td>
                            <td><a href="https://www.aliexpress.us/item/2251832615710334.html?spm=a2g0s.9042311.0.0.27424c4dXmyQoB&amp;gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>Pressure sensor - 0-1.2Mpa</td>
                            <td>Gagguino</td>
                            <td align="center">11</td>
                            <td><a href="https://www.aliexpress.us/item/2255800570317172.html?gatewayAdapt=glo2usa4itemAdapt&amp;_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>6mm T shape fitting</td>
                            <td>Gagguino</td>
                            <td align="center">4</td>
                            <td><a href="https://www.aliexpress.us/item/3256803959441921.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>Braided Hose</td>
                            <td>Gagguino</td>
                            <td align="center">20</td>
                            <td><a href="https://www.fiyo.co.uk/saeco-hose-silicone-hose-5-x-8-9-for-coffee-machine-16000380-42169">Link</a></td>
                        </tr>
                        <tr>
                            <td>6mm Barb x 1/4"</td>
                            <td>Gagguino</td>
                            <td align="center">1.5</td>
                            <td><a href="https://www.aliexpress.us/item/2251832641599579.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>Plier and 100 clamps</td>
                            <td>Gagguino</td>
                            <td align="center">19</td>
                            <td><a href="https://www.aliexpress.us/item/3256803154822955.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US">Link</a></td>
                        </tr>
                        <tr>
                            <td>Power Supply (12V 1000mA) and 5 Volt Stepdown* </td>
                            <td>Gagguino</td>
                            <td align="center">4*</td>
                            <td>
                                <a href="https://www.aliexpress.us/item/2251832826435151.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US">Link PS</a>
                                <br/>
                                <a href="https://www.aliexpress.us/item/3256801635468667.html?srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=60162592030&aff_fcid=0c732e846ff545abbc933a4161a34ceb-1682359892590-08034-_uAvaIl&tt=MG&aff_fsk=_uAvaIl&aff_platform=default&sk=_uAvaIl&aff_trace_key=0c732e846ff545abbc933a4161a34ceb-1682359892590-08034-_uAvaIl&shareId=60162592030&businessType=ProductDetail&platform=AE&terminal_id=8a5423ef4d3644b3b6ed5067a151401d&afSmartRedirect=y&gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US">Link</a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                            <tr>
                                <td></td>
                                <td align="right">Total:</td>
                                <td align="center">$1230</td>
                                <td></td>
                            </tr>
                        </tfoot>
                </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        * Note: I used a neutral/ground to 5V power supply instead. Not include this in the totals
                    </p>
                </Col>
            </Row>
        </Container>
    )
};

export default CoffeeMods;