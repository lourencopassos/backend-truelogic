import express from 'express';
import { AlbumBusiness } from '../business/album-business';
import { AlbumController } from '../controller/album-controller';
import { AlbumDatabase } from '../data/album-database';

const router = express.Router();

const database = new AlbumDatabase();
const business = new AlbumBusiness(database);
const controller = new AlbumController(business);

router.post('/', controller.createAlbum);
router.get('/', controller.getAlbums);
router.get('/:id', controller.getAlbumById);
router.delete('/:id', controller.deleteAlbum);
router.patch('/:id', controller.updateAlbum);

export { router };
