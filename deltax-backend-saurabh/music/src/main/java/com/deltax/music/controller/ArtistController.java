package com.deltax.music.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.deltax.music.entities.Artist;
import com.deltax.music.entities.Songs;
import com.deltax.music.services.ArtistService;

@CrossOrigin
@RestController
public class ArtistController {
	
	@Autowired
	private ArtistService artistService;
	
	@PostMapping("/addArtist")
	public String addSong(@RequestBody Artist artist) {
		return artistService.addSongs(artist);
	}
	
	@DeleteMapping("/deleteArtist")
	public String deleteArtist(@PathVariable Integer id) {
		return artistService.deleteArtist(id);
	}
	
	@GetMapping("/getArtist")
	public List<Artist> getAllArtist(){
		return artistService.getAllArtist();
	}
}
