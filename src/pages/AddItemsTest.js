//import React from 'react';
import './AddItemsTest.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Storage, API, graphqlOperation} from 'aws-amplify';
//import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createDansInventory } from '../graphql/mutations'
import config from '../use-this-aws-exports'

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config

const Admin = () => {
    const [image, setImage] = useState(null);
    const [dansDetails, setDansDetails] = useState({ name: "", color: "", price: "", fabric: "", type: "", image: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!dansDetails.name || !dansDetails.price) return
            await API.graphql(graphqlOperation(createDansInventory, { input: dansDetails }))
            setDansDetails({ name: "", color: "", price: "", fabric: "", type: "", image: "" })
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level.
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setDansDetails({ ...dansDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <section className="admin-wrapper">

                <section>
                    <header className="form-header">
                        <h3>Add New Dans</h3>

                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="name-form">
                                <p><label htmlFor="name">Name</label></p>
                                <p><input
                                    name="name"
                                    type="name"
                                    placeholder="Name of Product"
                                    onChange={(e) => setDansDetails({ ...dansDetails, name: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="color-form">
                                <p><label htmlFor="color">Color</label></p>
                                <p><input
                                    name="color"
                                    type="text"
                                    placeholder="Primary Colors of Dans"
                                    onChange={(e) => setDansDetails({ ...dansDetails, color: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="fabric-form">
                                <p><label htmlFor="fabric">Fabric</label></p>
                                <p><input
                                    name="fabric"
                                    type="text"
                                    placeholder="Type of fabric"
                                    onChange={(e) => setDansDetails({ ...dansDetails, fabric: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="type-form">
                                <p><label htmlFor="type">Type</label></p>
                                <p><input
                                    name="type"
                                    type="text"
                                    placeholder="Type of Hat(Visor, Baseball, Boonie, etc..)"
                                    onChange={(e) => setDansDetails({ ...dansDetails, type: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="number"
                                        placeholder="What is the Price of the Dans? (USD)"
                                        onChange={(e) => setDansDetails({ ...dansDetails, price: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>

        </section>
    )
}

export default Admin







// React from 'react';
//import {Storage, API, graphqlOperation} from 'aws-amplify';
//import {createDansInventory} from '../graphql/mutations';
//import awsExports from "../aws-exports";

/*
class AddItemsTest extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            file : null
        }
    }

    addImageToDB = async (image) => {
        console.log('add image to db')
        try{
            await API.graphql(graphqlOperation(createDansInventory, {Input: image}));
        } catch (error) {
            console.log(error)
        }
    }

    onChange(e){
        const file = e.target.files[0];
        console.log(file);

        Storage.put(file.name, file, {
        contentType: 'image/png'
        }).then (() => {
            this.setState({file: URL.createObjectURL(file)})
            //console.log(result);
            const image = {
                name: file.name,
                file: {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: file.name
                }
            }
            //console.log(image);
            this.addImageToDB(image);
            console.log('added completed')
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <div className="AddItemsTest">
                <div>
                    <p>Please select an image to upload</p>
                    <input type="file" onChange={(evt) => this.onChange(evt)}/>
                </div>
                <div>
                    <img src={this.state.file}/>
                </div>
            </div>
        )
    }
}

export default AddItemsTest;*/
