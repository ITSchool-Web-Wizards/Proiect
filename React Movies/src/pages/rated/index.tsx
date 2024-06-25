import { useState } from "react";
import { Container, Menu, Segment, Header, Loader } from "semantic-ui-react";
import { DisplayType } from "../home";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShows } from "./query";
import { ColumnDisplay } from "../home/column-display";
import { Navigate } from "react-router-dom";

export const Rated = () => {
    const [activeTab, setActiveTab] = useState<DisplayType>(DisplayType.Movies);

    const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
        queryKey: ["ratedMovies"],
        queryFn: fetchRatedMovies,
    });

    const { data: ratedTvShows, isLoading: isLoadingRatedTvShows } = useQuery({
        queryKey: ["ratedTvShows"],
        queryFn: fetchRatedTvShows,
    });

    if (localStorage.getItem("guest_session_id") === null) {
        return <Navigate to={"/auth"} />;
    }

    if (isLoadingRatedMovies || isLoadingRatedTvShows) {
        return <Loader active />;
    }

    return (
        <Container style={{ marginTop: 50 }}>
            <Menu pointing secondary>
                <Menu.Item
                    name="Movies"
                    active={activeTab === DisplayType.Movies}
                    onClick={() => setActiveTab(DisplayType.Movies)}
                />
                <Menu.Item
                    name="TV Shows"
                    active={activeTab === DisplayType.TvShows}
                    onClick={() => setActiveTab(DisplayType.TvShows)}
                />
            </Menu>

            <Segment>
                {activeTab === DisplayType.Movies ? (
                    <div>
                        <Header as="h2">Filme apreciate</Header>
                        <ColumnDisplay
                            data={ratedMovies?.results}
                            displayType={DisplayType.Movies}
                            isRated
                        />
                    </div>
                ) : (
                    <div>
                        <Header as="h2">Seriale Apreciate</Header>
                        <ColumnDisplay
                            data={ratedTvShows?.results}
                            displayType={DisplayType.TvShows}
                            isRated
                        />
                    </div>
                )}
            </Segment>
        </Container>
    );
};
