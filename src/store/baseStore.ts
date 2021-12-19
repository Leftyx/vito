import { DeepReadonly, reactive, readonly, ToRefs, toRefs, } from 'vue';

class StoreEntity extends Object {

}


class VTStore<T extends StoreEntity> {
   private underlying: T;

   constructor(initial: T) {
      this.underlying = reactive(initial) as T;
   }

   
   public mutate<K extends keyof T>(key: K, val: T[K]): void {
      this.underlying[key] = val;
   }

   get state(): DeepReadonly<T> {
      return readonly(this.underlying) as DeepReadonly<T>;
   }

   get refs(): ToRefs<DeepReadonly<T>> {
      return toRefs(this.state);
   }
}

export { VTStore };
