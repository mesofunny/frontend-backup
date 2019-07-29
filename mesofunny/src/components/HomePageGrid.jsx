// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Grid, Image } from "semantic-ui-react";

const HomePageGrid = () => {
    return (
        <div className="home-grid">
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src='' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src='' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );   
};

export default HomePageGrid; 