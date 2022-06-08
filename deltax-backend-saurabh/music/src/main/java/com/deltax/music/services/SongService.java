package com.deltax.music.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deltax.music.dao.SongDao;
import com.deltax.music.entities.Songs;

@Service
public class SongService {

	@Autowired
	private SongDao songDao;

	public String addSongs(Songs songs) {
		songDao.save(songs);
		return "Successfully Added";
	}

	public List<Songs> getAllSongs() {
		return songDao.findAll();
	}
}
