import {Schema, model, Document, Model} from 'mongoose';

export const HashtagSchema = new Schema(
    {
        name: {type: String, required: true}
    }
);

HashtagSchema.statics.retriveHashtags = (hashtags: string[]) => Promise.all(
    hashtags.map(
        (hashtag: string) => Hashtag
            .findOneAndUpdate({name: hashtag}, {name: hashtag}, {upsert: true, new: true})
            .exec()
    )
);

export interface IHashtagDoc extends Document {
    name: string;
}

interface IHashtagModel extends Model<IHashtagDoc> {
    retriveHashtags(hashtags: string[]): Promise<IHashtagDoc[]>;
}

const Hashtag = model<IHashtagDoc, IHashtagModel>('Hashtag', HashtagSchema);
export default Hashtag;
