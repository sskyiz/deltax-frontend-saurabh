package com.deltax.music.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Artists")
public class Artist {

	@Id
	@GeneratedValue
	private Integer artistId;
	
	@Column(name = "artistName")
	private String artistName;
	
	@Column(name = "artistDob")
	private String artistDob;
	
	@Column(name = "artistSong")
	private String artistSong;
	
	public Integer getArtistId() {
		return artistId;
	}

	public void setArtistId(Integer artistId) {
		this.artistId = artistId;
	}

	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public String getArtistSong() {
		return artistSong;
	}

	public void setArtistSong(String artistSong) {
		this.artistSong = artistSong;
	}

	public String getArtistDob() {
		return artistDob;
	}

	public void setArtistDob(String artistDob) {
		this.artistDob = artistDob;
	}

	@Override
	public String toString() {
		return "Artist [artistId=" + artistId + ", artistName=" + artistName + ", artistSong=" + artistSong
				+ ", artistDob=" + artistDob + "]";
	}

	public Artist(String artistName, String artistRating, String artistGenre) {
		super();
		this.artistName = artistName;
		this.artistDob = artistDob;
		this.artistSong = artistSong;
	}
	
	public Artist() {}
}
