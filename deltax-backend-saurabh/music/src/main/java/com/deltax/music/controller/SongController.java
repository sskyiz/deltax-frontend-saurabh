package com.deltax.music.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.deltax.music.entities.Songs;
import com.deltax.music.services.SongService;

@CrossOrigin
@RestController
public class SongController {

	@Autowired
	private SongService songService;
	
	@PostMapping("/addSong")
	public String addSong(@RequestBody Songs songs) {
		return songService.addSongs(songs);
	}
	
	@GetMapping("/getSongs")
	public List<Songs> getAllSongs(){
		return songService.getAllSongs();
	}
}
