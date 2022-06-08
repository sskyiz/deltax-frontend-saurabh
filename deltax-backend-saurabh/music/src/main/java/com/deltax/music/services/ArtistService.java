package com.deltax.music.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deltax.music.dao.ArtistDao;
import com.deltax.music.entities.Artist;

@Service
public class ArtistService {

	@Autowired
	private ArtistDao artistDao;

	public String addSongs(Artist artist) {
		artistDao.save(artist);
		return "Successfully Added";
	}

	public List<Artist> getAllArtist() {
		return artistDao.findAll();
	}

	public String deleteArtist(Integer id) {
		artistDao.deleteById(id);
		return "Successfully Deleted";
	}
}
