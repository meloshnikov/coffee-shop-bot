import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';


export const getMongoDbConfig = async (config: ConfigService): Promise<TypegooseModuleOptions> => {
  const uri = config.get('MONGO_URI');

  if (!uri) {
    throw new Error('MongoDB URI is missing in configuration');
  }

  return {
    uri,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
};
