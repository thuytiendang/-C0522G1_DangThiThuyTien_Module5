package projectbackend.dto.movie;

import projectbackend.model.movie.Movie;

public class CommentMovieDto {
    private int id;
    private String timeComment;
    private int pointComment;
    private boolean isDelete;
    private Movie movie;

    public CommentMovieDto() {
    }

    public CommentMovieDto(int id, String timeComment, int pointComment, boolean isDelete, Movie movie) {
        this.id = id;
        this.timeComment = timeComment;
        this.pointComment = pointComment;
        this.isDelete = isDelete;
        this.movie = movie;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTimeComment() {
        return timeComment;
    }

    public void setTimeComment(String timeComment) {
        this.timeComment = timeComment;
    }

    public int getPointComment() {
        return pointComment;
    }

    public void setPointComment(int pointComment) {
        this.pointComment = pointComment;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
