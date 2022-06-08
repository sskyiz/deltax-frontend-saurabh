package com.deltax.music.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deltax.music.entities.Artist;

@Repository
public interface ArtistDao extends JpaRepository<Artist, Integer>{

}
