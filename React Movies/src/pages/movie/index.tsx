import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "./query";
import { useParams } from "react-router-dom";
import { Grid, Header, Loader, Segment, Image, List, Label } from "semantic-ui-react";

export const Movie = () => {
    const { id } = useParams<string>();

    if (!id) {
        return <div>Invalid Movie</div>;
    }

    const { data, isLoading } = useQuery({
       
        queryKey: ["movie", id],
        queryFn: () => fetchMovieDetails(id),
    });

    const [imageSrc, setImageSrc] = useState(`https://image.tmdb.org/t/p/original/${data.poster_path}`);

    if (isLoading) {
        return <Loader active />;
    }

    const handleImageError = () => {
        setImageSrc('path/to/default-image.jpg');  
    };

    return (
        <div style={{ marginTop: 50 }}>
            <Segment>
                <Header>{data.title}</Header>
                <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                                <Image 
                                    src={imageSrc}
                                    size="medium"
                                    centered
                                    onError={handleImageError}
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <List>
                                <List.Item>
                                    <List.Header>Este filmul pentru adulți?</List.Header>
                                    {data.adult ? "Da" : "Nu"}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Buget:</List.Header>
                                    {data.budget}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Genuri:</List.Header>
                                    {data.genres.map((genre: any) => (
                                        <Label key={genre.id}>{genre.name}</Label>
                                    ))}
                                </List.Item>
                                <List.Item>
                                    <List.Header>IMDB ID:</List.Header>
                                    {data.imdb_id}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Popularitate:</List.Header>
                                    {data.popularity}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Companii de producție:</List.Header>
                                    {data.production_companies.map((company: any) => company.name).join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Data de lansare:</List.Header>
                                    {data.release_date}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Câștiguri:</List.Header>
                                    {data.revenue}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Timpul de rulare:</List.Header>
                                    {data.runtime}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Notă medie:</List.Header>
                                    {data.vote_average}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Limbă:</List.Header>
                                    {data.original_language}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};
