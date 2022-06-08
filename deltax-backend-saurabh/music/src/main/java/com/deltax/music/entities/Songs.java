package com.deltax.music.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Songs")
public class Songs {
	
	@Id
	@GeneratedValue
	private Integer songId;
	
	@Column(name = "songName")
	private String songName;
	
	@Column(name = "releaseDate")
	private String releaseDate;
	
	@Column(name = "songRating")
	private String songRating;
	
	@ManyToOne
	private Artist artist;
	
	public Songs(String songName, String releaseDate, String songRating, Artist artist) {
		super();
		this.songName = songName;
		this.releaseDate = releaseDate;
		this.songRating = songRating;
		this.artist = artist;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	public Integer getSongId() {
		return songId;
	}

	public void setSongId(Integer songId) {
		this.songId = songId;
	}

	public String getSongName() {
		return songName;
	}

	public void setSongName(String songName) {
		this.songName = songName;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getSongRating() {
		return songRating;
	}

	public void setSongRating(String songRating) {
		this.songRating = songRating;
	}

	@Override
	public String toString() {
		return "Songs [songId=" + songId + ", songName=" + songName + ", releaseDate=" + releaseDate + ", songRating="
				+ songRating + ", artist=" + artist + "]";
	}
	
	public Songs() {}
}
